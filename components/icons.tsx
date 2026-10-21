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
