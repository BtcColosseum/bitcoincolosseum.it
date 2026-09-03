import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { Header } from "@/components/header";
import { ArrowUpRight, Telegram, XLogo } from "@/components/icons";
import { NewsletterForm } from "@/components/newsletter-form";

const ticketUrl = "https://www.eventbrite.it/e/biglietti-bitcoin-colosseum-community-edition-1998950836763";

const communities = [
  ["21 Milioni", "https://21milioni.com/"],
  ["Bitvero", "https://www.bitvero.it/"],
  ["Bitcoin EDU Veneto", "https://t.me/Bitcoin_Veneto"],
  ["Bitcoin Calabria", "https://t.me/BitcoinCalabria_BitCal"],
  ["Bitcoin Roma", "https://t.me/SatoshiRoma"],
  ["Bitcoin EDU Emilia Romagna", "https://t.me/Bitcoin_EDU_EmiliaRomagna"],
  ["Bitcoin Bologna", "https://t.me/SatoshiSpritzBologna"],
];

export default function Home() {
  return (
    <main>
      <Header />

      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="hero-photo">
          <Image src="/images/hero.jpeg" alt="La community di Bitcoin Colosseum riunita a Roma" fill priority sizes="(max-width: 800px) 100vw, 50vw" />
          <span className="photo-tag">Roma · 41.9028° N · 12.4964° E</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow"><span /> Conference indipendente · P2P</p>
          <h1 id="hero-title"><span>Bitcoin</span><span>Colosseum</span></h1>
          <div className="hero-next">
            <p>Next block</p>
            <div><strong>14</strong><span>Novembre<br />2026</span></div>
          </div>
          <a className="circle-link" href={ticketUrl} target="_blank" rel="noreferrer" aria-label="Prenota un biglietto gratuito">
            <span>Ticket<br />free</span><ArrowUpRight />
          </a>
        </div>
      </section>

      <section className="newsletter" aria-labelledby="newsletter-title">
        <div>
          <p className="section-number">[ 00 / UPDATE ]</p>
          <h2 id="newsletter-title">Resta nel<br /><em>blocco.</em></h2>
        </div>
        <div className="newsletter-copy">
          <p>Eventi, progetti e notizie dall&apos;ecosistema Bitcoin romano. Poche email, solo segnale.</p>
          <NewsletterForm />
        </div>
      </section>

      <section id="eventi" className="events-intro">
        <div className="events-photo">
          <Image src="/images/events.jpg" alt="Dettaglio architettonico del Colosseo" fill sizes="(max-width: 800px) 100vw, 42vw" />
        </div>
        <div className="events-heading">
          <p className="section-number">[ 01 / EVENTI ]</p>
          <h2>Non una<br />conference.<br /><em>Una community.</em></h2>
          <p>Persone, idee e protocolli si incontrano nel cuore di Roma. Nessun palco, nessuna distanza: solo peer-to-peer.</p>
        </div>
      </section>

      <section className="featured-event" aria-labelledby="next-event-title">
        <aside className="event-date-block">
          <span>Sabato</span><strong>14</strong><span>Nov / 2026</span>
        </aside>
        <article className="event-content">
          <div className="event-meta"><span>17:00—21:00</span><span>Via Castro Pretorio 28a, Roma</span><span>Ingresso gratuito</span></div>
          <p className="event-kicker">Prossimo evento</p>
          <h2 id="next-event-title">Bitcoin Colosseum<br /><em>Community Edition</em></h2>
          <div className="event-grid">
            <div>
              <p>Bitcoin Colosseum torna a Roma per una giornata gratuita, indipendente e autofinanziata dedicata a Bitcoin, community e connessioni reali.</p>
              <p>Questa edizione porta ancora più avanti lo spirito peer-to-peer: meno distanza tra pubblico e partecipanti, più spazio per conoscersi, confrontarsi e costruire.</p>
            </div>
            <div>
              <h3>Durante l&apos;evento</h3>
              <ul>
                <li>Incontra community Bitcoin da tutta Italia</li>
                <li>Confrontati con builder e partecipanti</li>
                <li>Scopri progetti ed esperienze dell&apos;ecosistema</li>
                <li>Fai networking in un ambiente aperto</li>
              </ul>
            </div>
          </div>
          <a className="primary-link" href={ticketUrl} target="_blank" rel="noreferrer"><span>Assicurati un posto gratuito</span><ArrowUpRight /></a>
        </article>
      </section>

      <section className="communities" aria-labelledby="community-title">
        <div><p className="section-number">[ NETWORK ]</p><h2 id="community-title">Community<br /><em>confermate</em></h2></div>
        <div className="community-list">
          {communities.map(([name, url], index) => (
            <a href={url} target="_blank" rel="noreferrer" key={name}><span>0{index + 1}</span><strong>{name}</strong><ArrowUpRight /></a>
          ))}
          <p>Lista in continuo aggiornamento.</p>
        </div>
      </section>

      <section className="archive" aria-labelledby="archive-title">
        <div className="archive-header"><p className="section-number">[ 02 / ARCHIVIO ]</p><h2 id="archive-title">Blocchi<br /><em>precedenti.</em></h2></div>
        <article className="archive-item">
          <div className="archive-date"><strong>25</strong><span>Aprile 2026<br />17:00—21:00</span></div>
          <div><p className="event-kicker">Atom Space · Roma</p><h3>2° Incontro Bitcoin Colosseum</h3><p>Una serata dedicata all&apos;ecosistema Bitcoin, con particolare attenzione a Lightning, Nostr, Cashu e BitChat. Un incontro dal vivo tra appassionati, curiosi e builder.</p></div>
        </article>
        <article className="archive-item">
          <div className="archive-date"><strong>20</strong><span>Settembre 2025<br />17:00—21:00</span></div>
          <div><p className="event-kicker">Coinbar · Roma</p><h3>Il primo blocco</h3><p>Il meetup che ha dato inizio a Bitcoin Colosseum: un aperitivo peer-to-peer senza palco, dove persone da tutta Italia hanno condiviso idee su Bitcoin, Lightning, Nostr e Cashu.</p><blockquote>“Non solo un meetup: un nuovo epicentro Bitcoin nel cuore della città eterna.”</blockquote></div>
        </article>
      </section>

      <div className="marquee" aria-hidden="true"><div>✦ TUTTO INIZIA CON UN&apos;IDEA ✦ TUTTO INIZIA CON UN&apos;IDEA ✦ TUTTO INIZIA CON UN&apos;IDEA&nbsp;</div></div>

      <section id="contatti" className="contact" aria-labelledby="contact-title">
        <div className="contact-visual">
          <Image src="/images/contact.jpg" alt="Riflessi arancioni e blu su vetro" fill sizes="(max-width: 800px) 100vw, 50vw" />
          <p>Proof of<br /><em>community.</em></p>
        </div>
        <div className="contact-content">
          <p className="section-number">[ 03 / PARLIAMONE ]</p>
          <h2 id="contact-title">Vuoi supportare<br />i prossimi <em>eventi?</em></h2>
          <p>Collaboriamo con aziende, progetti e community che condividono i nostri valori. Scrivici e costruiamo insieme il prossimo blocco.</p>
          <ContactForm />
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <Image src="/images/logo.svg" alt="Bitcoin Colosseum" width={1962} height={2662} />
          <a href="mailto:hello@bitcoincolosseum.it">hello@bitcoincolosseum.it <ArrowUpRight /></a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Bitcoin Colosseum</span><span>Roma, Italia</span>
          <div><a href="https://t.me/BtcColosseum" aria-label="Telegram"><Telegram /></a><a href="https://x.com/BtcColosseum" aria-label="X"><XLogo /></a></div>
        </div>
      </footer>
    </main>
  );
}
