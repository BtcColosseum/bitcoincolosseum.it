# Bitcoin Colosseum

Questo repository contiene il sito ufficiale di **Bitcoin Colosseum**, la community e conference indipendente dedicata a Bitcoin a Roma.

Sito pubblico: [bitcoincolosseum.it](https://bitcoincolosseum.it)

## Cosa contiene il sito

Dal sito è possibile:

- scoprire il prossimo evento;
- prenotare gratuitamente il proprio posto;
- conoscere le community partecipanti;
- prenotare la T-shirt ufficiale e pagarla con Bitcoin;
- sostenere l'evento con una donazione in sats;
- iscriversi alla newsletter;
- contattare l'organizzazione.

I pagamenti sono gestiti da **BTCPay Server**. Bitcoin Colosseum non custodisce dati di carte di credito e non utilizza intermediari per ricevere Bitcoin.

## Come aggiornare il sito

La maggior parte dei contenuti della pagina si trova nel file [`app/page.tsx`](app/page.tsx). Qui sono presenti date, orari, indirizzi, testi, link e nomi delle community.

Per fare una piccola modifica direttamente da GitHub:

1. Apri [`app/page.tsx`](app/page.tsx).
2. Premi l'icona della matita in alto a destra.
3. Modifica soltanto il testo necessario, senza cancellare virgolette, parentesi o simboli come `<` e `>`.
4. Premi **Commit changes**.
5. Attendi qualche minuto: il sito viene aggiornato automaticamente.

Se GitHub segnala un errore dopo la modifica, apri la sezione **Actions** del repository per vedere quale controllo non è passato.

## Immagini e logo

Le immagini pubbliche si trovano nella cartella [`public/images`](public/images).

| File | Utilizzo |
| --- | --- |
| `logo.svg` | Logo, favicon e intestazione |
| `hero.jpeg` | Foto principale della home |
| `events.jpg` | Sezione dedicata agli eventi |
| `contact.jpg` | Sezione contatti |
| `tshirt.jpg` | Foto della T-shirt ufficiale |

Quando sostituisci un'immagine, mantieni lo stesso nome del file. È consigliato usare immagini JPG o WebP leggere, possibilmente sotto 1 MB.

## Pagamenti

Il checkout della T-shirt e quello delle donazioni si aprono direttamente sopra la home. L'integrazione si trova in [`components/btcpay-checkout.tsx`](components/btcpay-checkout.tsx).

La T-shirt utilizza il prodotto già configurato nel POS di BTCPay Server. Le donazioni vengono inviate allo store Bitcoin Colosseum tramite il Pay Button.

Le donazioni effettuate dalla home arrivano correttamente allo store, ma non aumentano il contatore pubblico dell'app Crowdfund.

Non pubblicare mai nel repository:

- password;
- seed phrase;
- chiavi private;
- API key riservate;
- codici di accesso a BTCPay Server.

## Newsletter e contatti

Il modulo contatti utilizza [Web3Forms](https://web3forms.com/).

La newsletter utilizza [Brevo](https://www.brevo.com/) con conferma dell'iscrizione via email.

Le relative configurazioni sono salvate in modo sicuro nelle impostazioni del repository GitHub e non devono essere scritte direttamente nei file del sito.

## Pubblicazione automatica

Ogni modifica confermata sul ramo `main` avvia automaticamente la pubblicazione tramite **GitHub Actions**.

Per controllare una pubblicazione:

1. Apri la sezione **Actions** su GitHub.
2. Seleziona l'ultima voce **Deploy to GitHub Pages**.
3. Un segno verde indica che il sito è stato pubblicato.
4. Un segno rosso indica che è necessario correggere un errore.

Il dominio pubblico è configurato nel file [`public/CNAME`](public/CNAME).

## Avviare il sito sul proprio computer

Questa parte è utile solo a chi vuole vedere le modifiche prima di pubblicarle.

Sono necessari [Node.js](https://nodejs.org/) versione 22 o successiva e il Terminale.

La prima volta:

```bash
npm install
cp .env.example .env.local
```

Per avviare il sito:

```bash
npm run dev
```

Apri poi [http://localhost:3000](http://localhost:3000) nel browser. Per fermare il sito premi `Control + C` nel Terminale.

## Controlli prima della pubblicazione

Chi modifica il codice dovrebbe eseguire:

```bash
npm run lint
npm run build
```

Se entrambi i comandi terminano senza errori, il sito è pronto per essere pubblicato.

## Informazioni tecniche

Il sito è realizzato con Next.js e viene esportato come sito statico su GitHub Pages. Non è necessario gestire un server web tradizionale.

I principali file sono:

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
