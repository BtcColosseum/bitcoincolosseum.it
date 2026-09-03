type IconProps = { className?: string };

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function Telegram({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m21.7 3.4-3.2 15.1c-.2 1.1-.9 1.4-1.8.9l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6 12.3l-4.8-1.5c-1-.3-1-1 .2-1.5L20.1 2c.9-.3 1.8.2 1.6 1.4Z" />
    </svg>
  );
}

export function XLogo({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.2 2h3.7l-8 9.2L23.3 22h-7.4l-5.8-7.6L3.5 22H-.2l8.6-9.8L-.6 2H7l5.2 6.9L18.2 2Zm-1.3 18.1h2L5.9 3.8H3.7l13.2 16.3Z" />
    </svg>
  );
}

export function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="menu-icon" aria-hidden="true">
      <span className={open ? "rotate-down" : ""} />
      <span className={open ? "rotate-up" : ""} />
    </span>
  );
}
