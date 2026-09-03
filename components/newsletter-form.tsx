"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "./icons";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const action = process.env.NEXT_PUBLIC_BREVO_FORM_ACTION;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (!action) {
      event.preventDefault();
      return;
    }
    setSubmitted(true);
  }

  return (
    <div className="newsletter-form-wrap">
      <iframe title="Risposta iscrizione newsletter" name="brevo-response" className="form-response-frame" />
      <form className="newsletter-form" action={action || undefined} method="POST" target="brevo-response" onSubmit={handleSubmit}>
        <label htmlFor="newsletter-email">La tua email</label>
        <div className="newsletter-input-row">
          <input id="newsletter-email" name="EMAIL" type="email" autoComplete="email" placeholder="nome@email.it" required />
          <button type="submit" aria-label="Iscriviti alla newsletter">
            <span>Iscriviti</span><ArrowUpRight />
          </button>
        </div>
        <label className="consent-field">
          <input type="checkbox" required />
          <span>Accetto di ricevere aggiornamenti via email e ho letto la privacy policy.</span>
        </label>
        <input type="text" name="email_address_check" value="" onChange={() => undefined} className="honeypot" tabIndex={-1} aria-hidden="true" />
        <input type="hidden" name="locale" value="it" />
        <input type="hidden" name="html_type" value="simple" />
      </form>
      {submitted && <p className="form-status success" role="status">Controlla la tua casella email per confermare l&apos;iscrizione.</p>}
      {!action && <p className="form-status configuration">Il modulo newsletter sarà attivo appena verrà collegato a Brevo.</p>}
    </div>
  );
}
