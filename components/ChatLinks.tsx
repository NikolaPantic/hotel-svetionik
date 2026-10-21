import { getDict } from "@/content";
import type { Lang } from "@/lib/routes";
import { messaging } from "@/lib/site";
import { ViberIcon, WhatsAppIcon } from "./icons";

/** Brzi kontakt preko Vibera i WhatsApp-a. */
export function ChatLinks({ lang, className = "" }: { lang: Lang; className?: string }) {
  const t = getDict(lang).chat;
  return (
    <div className={`chat-links ${className}`} aria-label={t.label} role="group">
      <a className="chat-link chat-link--viber" href={messaging.viber}>
        <ViberIcon />
        {t.viber}
      </a>
      <a className="chat-link chat-link--whatsapp" href={messaging.whatsapp} target="_blank" rel="noopener">
        <WhatsAppIcon />
        {t.whatsapp}
      </a>
    </div>
  );
}
