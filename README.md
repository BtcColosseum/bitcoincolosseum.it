# Bitcoin Colosseum

Questo repository contiene il sito ufficiale di **Bitcoin Colosseum**, la community e conference indipendente dedicata a Bitcoin a Roma.

Sito pubblico: [bitcoincolosseum.it](https://bitcoincolosseum.it)

## Cosa contiene il sito

Dal sito è possibile:

- scoprire il prossimo evento;
- prenotare gratuitamente il proprio posto;
- conoscere le community partecipanti;
- sostenere l'evento con una donazione in sats;
- iscriversi alla newsletter;
- contattare l'organizzazione.

I pagamenti sono gestiti da **BTCPay Server**. Bitcoin Colosseum non custodisce dati di carte di credito e non utilizza intermediari per ricevere Bitcoin.

## Contenuti

Date, orari, indirizzi, testi, link e community sono definiti principalmente in [`app/page.tsx`](app/page.tsx). Gli stili globali e responsive si trovano in [`app/globals.css`](app/globals.css).

## Immagini e logo

Le immagini pubbliche si trovano nella cartella [`public/images`](public/images).

| File | Utilizzo |
| --- | --- |
| `logo.svg` | Logo, favicon e intestazione |
| `hero.jpeg` | Foto principale della home |
| `events.jpg` | Sezione dedicata agli eventi |
| `contact.jpg` | Sezione contatti |

Per sostituire un'immagine mantenendo i riferimenti esistenti, usa lo stesso nome del file. Sono consigliate immagini JPG o WebP ottimizzate.

## Pagamenti

Le donazioni sono gestite tramite BTCPay Server. L'integrazione del checkout si trova in [`components/btcpay-checkout.tsx`](components/btcpay-checkout.tsx).

## Newsletter e contatti

Il modulo contatti utilizza [Web3Forms](https://web3forms.com/), mentre la newsletter utilizza [Brevo](https://www.brevo.com/) con conferma via email. Le variabili necessarie sono documentate in [`.env.example`](.env.example).

## Pubblicazione automatica

Ogni modifica pubblicata sul ramo `main` avvia il deploy su GitHub Pages tramite GitHub Actions. Il dominio è configurato in [`public/CNAME`](public/CNAME).

## Sviluppo locale

È richiesto [Node.js](https://nodejs.org/) 22 o successivo.

La prima volta:

```bash
npm install
cp .env.example .env.local
```

Per avviare il sito:

```bash
npm run dev
```

Il sito sarà disponibile su [http://localhost:3000](http://localhost:3000).

## Verifiche

```bash
npm run lint
npm run build
```

## Struttura

Il sito è realizzato con Next.js ed esportato staticamente su GitHub Pages. I file principali sono:

| Percorso | Contenuto |
| --- | --- |
| `app/page.tsx` | Contenuti della home |
| `app/globals.css` | Aspetto grafico e versione mobile |
| `app/layout.tsx` | Titolo, descrizione, favicon e anteprime social |
| `components/header.tsx` | Menu di navigazione |
| `components/btcpay-checkout.tsx` | Pagamenti BTCPay Server |
| `components/contact-form.tsx` | Modulo contatti |
| `components/newsletter-form.tsx` | Iscrizione alla newsletter |

Per assistenza sul sito: [hello@bitcoincolosseum.it](mailto:hello@bitcoincolosseum.it)
