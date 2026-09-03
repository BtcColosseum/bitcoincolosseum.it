"use client";

import Image from "next/image";
import { useState } from "react";
import { MenuIcon, Telegram, XLogo } from "./icons";

const links = [
  { label: "Home", href: "#home" },
  {
    label: "Biglietti (free)",
    href: "https://www.eventbrite.it/e/biglietti-bitcoin-colosseum-community-edition-1998950836763",
    external: true,
  },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a href="#home" className="logo-link" aria-label="Bitcoin Colosseum, torna alla home">
        <Image src="/images/logo.svg" alt="Bitcoin Colosseum" width={1962} height={2662} priority />
      </a>

      <nav className="desktop-nav" aria-label="Navigazione principale">
        {links.map((link) => (
          <a key={link.label} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-socials">
        <a href="https://t.me/BtcColosseum" target="_blank" rel="noreferrer" aria-label="Bitcoin Colosseum su Telegram"><Telegram /></a>
        <a href="https://x.com/BtcColosseum" target="_blank" rel="noreferrer" aria-label="Bitcoin Colosseum su X"><XLogo /></a>
      </div>

      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Chiudi menu" : "Apri menu"}>
        <MenuIcon open={open} />
      </button>

      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Navigazione mobile">
          {links.map((link, index) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>
              <span>0{index + 1}</span>{link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <span>Roma, Italia</span>
          <div><a href="https://t.me/BtcColosseum">Telegram</a><a href="https://x.com/BtcColosseum">X / Twitter</a></div>
        </div>
      </div>
    </header>
  );
}
