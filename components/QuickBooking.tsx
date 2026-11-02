"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, type FormEvent } from "react";
import type { Dict } from "@/content";

type Props = { action: string; t: Dict["home"]["quick"]; rooms: { value: string; label: string }[] };

/** Brza pretraga sa naslovne — prosleđuje izbor formi za rezervaciju preko URL parametara. */
export function QuickBooking({ action, t, rooms }: Props) {
  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    for (const [k, v] of data) if (typeof v === "string" && v) params.set(k, v);
    router.push(`${action}?${params.toString()}#forma`);
  };

  const dateRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (dateRef.current) dateRef.current.min = new Date().toISOString().slice(0, 10);
  }, []);

  return (
    <div className="booking-bar">
      <div className="container">
        <form suppressHydrationWarning onSubmit={onSubmit} action={action} aria-label={t.cta}>
          <div className="field">
            <label htmlFor="q-arrival">{t.arrival}</label>
            <input suppressHydrationWarning id="q-arrival" name="arrival" type="date" ref={dateRef} />
          </div>
          <div className="field">
            <label htmlFor="q-nights">{t.nights}</label>
            <input suppressHydrationWarning id="q-nights" name="nights" type="number" min={1} max={30} defaultValue={1} inputMode="numeric" />
          </div>
          <div className="field">
            <label htmlFor="q-guests">{t.guests}</label>
            <select suppressHydrationWarning id="q-guests" name="guests" defaultValue="2">
              {Array.from({ length: 8 }, (_, i) => <option key={i}>{i + 1}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="q-room">{t.room}</label>
            <select suppressHydrationWarning id="q-room" name="room" defaultValue="">
              <option value="">{t.any}</option>
              {rooms.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
            </select>
          </div>
          <button suppressHydrationWarning className="btn btn--solid" type="submit">{t.cta}</button>
        </form>
      </div>
    </div>
  );
}
