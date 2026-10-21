"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import type { Dict } from "@/content";
import { ROOM_VALUES, emailjsConfig } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";
type Errors = Record<string, string | undefined>;
type FormT = Dict["forms"];

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const isPhone = (v: string) => /^\+?[0-9]{9,14}$/.test(v.replace(/[\s()/.-]/g, ""));
const isName = (v: string) => /^[\p{L}][\p{L}\s'-]*$/u.test(v.trim());

/** EmailJS se učitava tek pri slanju — ne opterećuje početno učitavanje stranice. */
async function sendEmail(template: string, params: Record<string, string>) {
  const { default: emailjs } = await import("@emailjs/browser");
  return emailjs.send(emailjsConfig.serviceId, template, params, { publicKey: emailjsConfig.publicKey });
}

function Field({
  id, label, error, full, children,
}: { id: string; label: string; error?: string; full?: boolean; children: ReactNode }) {
  return (
    <div className={`form-field${full ? " full" : ""}${error ? " is-invalid" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <span className="form-field__error" id={`${id}-error`}>{error}</span>}
    </div>
  );
}

const aria = (id: string, errors: Errors, key: string) =>
  errors[key] ? { "aria-invalid": true as const, "aria-describedby": `${id}-error` } : {};

function useMinToday() {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.min = new Date().toISOString().slice(0, 10);
  }, []);
  return ref;
}

function StatusLine({ status, t, onReset }: { status: Status; t: FormT; onReset: () => void }) {
  if (status === "ok")
    return (
      <p className="form-status form-status--ok" role="status">
        {t.success}{" "}
        <button type="button" className="text-link" style={{ background: "none", border: 0, padding: 0, cursor: "pointer" }} onClick={onReset}>
          {t.again}
        </button>
      </p>
    );
  if (status === "error") return <p className="form-status form-status--err" role="alert">{t.error}</p>;
  return <p className="form-status" role="status" aria-live="polite" />;
}

/* ---------------------------------------------------------------------------
   Upit za rezervaciju — isti EmailJS šablon i nazivi polja kao na starom sajtu
--------------------------------------------------------------------------- */


export function BookingForm({ t, roomLabels }: { t: FormT; roomLabels: string[] }) {
  const formRef = useRef<HTMLFormElement>(null);
  const dateRef = useMinToday();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  // Popuni polja iz brze pretrage / linka sa stranice sobe (?room=…&arrival=…)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const f = formRef.current;
    if (!f) return;
    const map: Record<string, string> = { room: "room-type", arrival: "arrival-date", nights: "number-of-nights", guests: "guests" };
    for (const [param, name] of Object.entries(map)) {
      const v = q.get(param);
      const el = f.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | null;
      if (v && el) el.value = v;
    }
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const errs: Errors = {
      "first-name": !d["first-name"] ? t.invalid.required : !isName(d["first-name"]) ? t.invalid.name : undefined,
      "last-name": !d["last-name"] ? t.invalid.required : !isName(d["last-name"]) ? t.invalid.name : undefined,
      email: !d.email ? t.invalid.required : !isEmail(d.email) ? t.invalid.email : undefined,
      phone: !d.phone ? t.invalid.required : !isPhone(d.phone) ? t.invalid.phone : undefined,
      "room-type": !d["room-type"] ? t.invalid.required : undefined,
      "arrival-date": !d["arrival-date"] ? t.invalid.required : undefined,
      "number-of-nights": !(Number(d["number-of-nights"]) > 0) ? t.invalid.required : undefined,
    };
    setErrors(errs);
    const firstInvalid = Object.keys(errs).find((k) => errs[k]);
    if (firstInvalid) {
      (e.currentTarget.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }
    setStatus("sending");
    try {
      // Broj gostiju ide u napomenu kako bi se video i u postojećem e-mail šablonu.
      const note = [`Broj gostiju: ${d.guests}`, d["additional-info"]].filter(Boolean).join("\n");
      await sendEmail(emailjsConfig.reservationTemplate, { ...d, "additional-info": note });
      setStatus("ok");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form ref={formRef} className="form-grid" onSubmit={onSubmit} noValidate id="forma">
      <Field id="first-name" label={t.firstName} error={errors["first-name"]}>
        <input id="first-name" name="first-name" autoComplete="given-name" required {...aria("first-name", errors, "first-name")} />
      </Field>
      <Field id="last-name" label={t.lastName} error={errors["last-name"]}>
        <input id="last-name" name="last-name" autoComplete="family-name" required {...aria("last-name", errors, "last-name")} />
      </Field>
      <Field id="email" label={t.email} error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" required {...aria("email", errors, "email")} />
      </Field>
      <Field id="phone" label={t.phone} error={errors.phone}>
        <input id="phone" name="phone" type="tel" autoComplete="tel" required {...aria("phone", errors, "phone")} />
      </Field>
      <Field id="room-type" label={t.room} error={errors["room-type"]}>
        <select id="room-type" name="room-type" defaultValue="" required {...aria("room-type", errors, "room-type")}>
          <option value="" disabled>{t.choose}</option>
          {ROOM_VALUES.map((v, i) => <option key={v} value={v}>{roomLabels[i]}</option>)}
        </select>
      </Field>
      <Field id="guests" label={t.guests}>
        <select id="guests" name="guests" defaultValue="2">
          {Array.from({ length: 8 }, (_, i) => <option key={i}>{i + 1}</option>)}
        </select>
      </Field>
      <Field id="arrival-date" label={t.arrival} error={errors["arrival-date"]}>
        <input ref={dateRef} id="arrival-date" name="arrival-date" type="date" required {...aria("arrival-date", errors, "arrival-date")} />
      </Field>
      <Field id="number-of-nights" label={t.nights} error={errors["number-of-nights"]}>
        <input id="number-of-nights" name="number-of-nights" type="number" min={1} max={60} defaultValue={1} inputMode="numeric" required {...aria("number-of-nights", errors, "number-of-nights")} />
      </Field>
      <Field id="additional-info" label={t.notes} full>
        <textarea id="additional-info" name="additional-info" rows={3} />
      </Field>
      <div className="full">
        <p className="form-note">{t.privacy}</p>
        <button className="btn btn--solid" type="submit" disabled={status === "sending"}>
          {status === "sending" ? t.sending : t.submit}
        </button>
        <StatusLine status={status} t={t} onReset={() => setStatus("idle")} />
      </div>
    </form>
  );
}

/* ---------------------------------------------------------------------------
   Kontakt forma — EmailJS šablon "contact_form" (polja: name, phone, email, message)
--------------------------------------------------------------------------- */
export function ContactForm({ t }: { t: FormT }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const errs: Errors = {
      name: !d.name?.trim() ? t.invalid.required : !isName(d.name) ? t.invalid.name : undefined,
      phone: !d.phone ? t.invalid.required : !isPhone(d.phone) ? t.invalid.phone : undefined,
      email: !d.email ? t.invalid.required : !isEmail(d.email) ? t.invalid.email : undefined,
      message: !d.message?.trim() ? t.invalid.required : undefined,
    };
    setErrors(errs);
    const firstInvalid = Object.keys(errs).find((k) => errs[k]);
    if (firstInvalid) {
      (e.currentTarget.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }
    setStatus("sending");
    try {
      await sendEmail(emailjsConfig.contactTemplate, d);
      setStatus("ok");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form ref={formRef} className="form-grid" onSubmit={onSubmit} noValidate>
      <Field id="c-name" label={t.name} error={errors.name} full>
        <input id="c-name" name="name" autoComplete="name" required {...aria("c-name", errors, "name")} />
      </Field>
      <Field id="c-phone" label={t.phone} error={errors.phone}>
        <input id="c-phone" name="phone" type="tel" autoComplete="tel" required {...aria("c-phone", errors, "phone")} />
      </Field>
      <Field id="c-email" label={t.email} error={errors.email}>
        <input id="c-email" name="email" type="email" autoComplete="email" required {...aria("c-email", errors, "email")} />
      </Field>
      <Field id="c-message" label={t.message} error={errors.message} full>
        <textarea id="c-message" name="message" rows={4} required {...aria("c-message", errors, "message")} />
      </Field>
      <div className="full">
        <p className="form-note">{t.privacy}</p>
        <button className="btn btn--solid" type="submit" disabled={status === "sending"}>
          {status === "sending" ? t.sending : t.submit}
        </button>
        <StatusLine status={status} t={t} onReset={() => setStatus("idle")} />
      </div>
    </form>
  );
}
