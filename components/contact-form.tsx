"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "./icons";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!accessKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("access_key", accessKey);
    data.append("subject", "Nuovo messaggio da Bitcoin Colosseum");
    data.append("from_name", "bitcoincolosseum.it");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="checkbox" name="botcheck" className="honeypot" tabIndex={-1} autoComplete="off" />
      <div className="field-pair">
        <label><span>Nome</span><input name="name" type="text" autoComplete="name" placeholder="Il tuo nome" required /></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" placeholder="nome@email.it" required /></label>
      </div>
      <label><span>Vorrei parlare di</span>
        <select name="reason" defaultValue="Sponsorizzazione">
          <option>Sponsorizzazione</option><option>Partnership</option><option>Community</option><option>Altro</option>
        </select>
      </label>
      <label><span>Messaggio</span><textarea name="message" rows={4} placeholder="Raccontaci la tua idea..." required /></label>
      <label className="consent-field contact-consent">
        <input type="checkbox" required /><span>Acconsento al trattamento dei dati per rispondere alla mia richiesta.</span>
      </label>
      <button className="submit-button" type="submit" disabled={status === "sending"}>
        <span>{status === "sending" ? "Invio in corso" : "Invia messaggio"}</span><ArrowUpRight />
      </button>
      {status === "success" && <p className="form-status success" role="status">Messaggio inviato. Ti risponderemo presto.</p>}
      {status === "error" && <p className="form-status error" role="alert">Invio non riuscito. Scrivi a hello@bitcoincolosseum.it.</p>}
    </form>
  );
}
