const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, "aria-hidden": true } as const;

export const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
);
export const PinIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke}><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>
);
export const MoonIcon = () => (
  <svg className="i-moon" viewBox="0 0 24 24" {...stroke}><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" /></svg>
);
export const SunIcon = () => (
  <svg className="i-sun" viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
);
export const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4a21 21 0 0 0-2.3-.1c-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21z" /></svg>
);
export const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r=".8" fill="currentColor" /></svg>
);
export const MailIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke}><rect x="3" y="5" width="18" height="14" /><path d="m3 6 9 7 9-7" /></svg>
);
export const ViberIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.4 2C7.6 2 3.7 3 3.1 8.6c-.3 2.9-.3 6.6 2.6 8.4v3.2c0 .7.8 1 1.3.5l2.3-2.5c.7.1 1.4.1 2.1.1 3.8 0 7.7-1 8.3-6.6.3-2.9.3-6.7-2.6-8.5C15.8 2.3 13.6 2 11.4 2zm.2 1.6c1.9 0 3.7.3 4.6.9 2 1.3 2 4.3 1.8 6.6-.5 4.4-3.4 5.1-6.6 5.1-.7 0-1.4 0-2.1-.1l-2 2.2v-2.7c-2.4-1.3-2.4-4.3-2.2-6.6.5-4.5 3.5-5.3 6.5-5.4zm-2.6 2.3c-.3 0-.6.1-.9.4-.5.5-.9 1.2-.6 2.1.8 2.4 2.6 4.6 5.1 5.6.8.3 1.6-.1 2.1-.7.4-.4.3-1-.2-1.3l-1.1-.8c-.4-.3-1-.2-1.3.2l-.3.4c-1.2-.5-2.1-1.4-2.6-2.6l.4-.3c.4-.3.5-.9.2-1.3l-.8-1.1c-.2-.4-.6-.6-1-.6zm3.2.6a.4.4 0 0 0 0 .8c1.6.1 2.9 1.4 3 3a.4.4 0 1 0 .8 0c-.1-2-1.8-3.7-3.8-3.8zm.1 1.4a.4.4 0 0 0-.1.8c.8.1 1.4.7 1.5 1.5a.4.4 0 1 0 .8-.1c-.1-1.2-1-2.1-2.2-2.2z"/></svg>
);
export const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-4.2 15.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3.3 4.4c-.2 0-.5 0-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4.9 2.9.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.1-.7.2l-.9 1.1c-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.4-.5.3-.5v-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5z"/></svg>
);
export const StarIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.3} aria-hidden="true"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>
);
