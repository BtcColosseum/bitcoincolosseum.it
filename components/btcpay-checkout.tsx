"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "./icons";

declare global {
  interface Window {
    btcpay?: {
      showFrame: () => void;
      hideFrame: () => void;
      onModalWillLeave: (callback: () => void) => void;
    };
  }
}

function showCheckout() {
  window.dispatchEvent(new Event("btcpay:open"));
}

export function BtcpayModalController() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeUi = () => {
      setOpen(false);
      document.documentElement.classList.remove("btcpay-open");
    };
    const openCheckout = () => {
      if (!window.btcpay) return;

      window.btcpay.onModalWillLeave(closeUi);
      window.btcpay.showFrame();
      document.documentElement.classList.add("btcpay-open");
      setOpen(true);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && document.documentElement.classList.contains("btcpay-open")) {
        window.btcpay?.hideFrame();
      }
    };

    window.addEventListener("btcpay:open", openCheckout);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("btcpay:open", openCheckout);
      window.removeEventListener("keydown", closeOnEscape);
      document.documentElement.classList.remove("btcpay-open");
    };
  }, []);

  if (!open) return null;

  return (
    <button className="btcpay-close" type="button" onClick={() => window.btcpay?.hideFrame()} aria-label="Chiudi il checkout">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.8" /></svg>
    </button>
  );
}

export function TshirtCheckout() {
  return (
    <form method="post" action="https://shop.bitcoincolosseum.it/apps/3UauT4VpveyLCPFsh9Qqqj5mNwFE/pos" target="btcpay" onSubmit={showCheckout}>
      <input type="hidden" name="choiceKey" value="t-shirt-1" />
      <button className="funding-link" type="submit"><span>Prenota per 40.000 sats</span><ArrowUpRight /></button>
    </form>
  );
}

export function SupportCheckout() {
  return (
    <form className="support-payment" method="post" action="https://shop.bitcoincolosseum.it/api/v1/invoices" target="btcpay" onSubmit={showCheckout}>
      <input type="hidden" name="storeId" value="4JMyyNn1sYMAyJtkEaMPy1b1Rfw4qvYDkBi4agc8jAcT" />
      <input type="hidden" name="notifyEmail" value="hello@bitcoincolosseum.it" />
      <input type="hidden" name="currency" value="SATS" />
      <input type="hidden" name="checkoutDesc" value="Supporto Bitcoin Colosseum Roma" />
      <label htmlFor="support-amount">Quanto vuoi donare? <span>SATS</span></label>
      <input id="support-amount" className="support-amount" type="number" name="price" min="1" step="1" inputMode="numeric" placeholder="21000" required />
      <button className="funding-link" type="submit"><span>Invia il tuo contributo</span><ArrowUpRight /></button>
    </form>
  );
}
