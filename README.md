# Bitcoin Colosseum

Static website for Bitcoin Colosseum, built with Next.js, TypeScript and Tailwind CSS and exported for GitHub Pages.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Forms

Create a form at [Web3Forms](https://web3forms.com/) and set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to its access key.

In Brevo, create a subscription form with double opt-in enabled. Open its HTML embed code and copy the form's `action` URL, which normally starts with `https://...sibforms.com/serve/`, into `NEXT_PUBLIC_BREVO_FORM_ACTION`. A Brevo API key must never be added to this project.

## GitHub Pages

The included workflow deploys every push to `main`. Configure these repository secrets:

- `WEB3FORMS_ACCESS_KEY`
- `BREVO_FORM_ACTION`

Create a repository variable named `GA_MEASUREMENT_ID` containing the Google Analytics 4 ID, for example `G-XXXXXXXXXX`. Analytics loads automatically when the variable is configured.

The custom domain is defined in `public/CNAME`. If deploying without a custom domain at `username.github.io/repository`, remove `public/CNAME` and create the repository variable `PAGES_BASE_PATH` with the value `/repository`.

Select **GitHub Actions** as the Pages source in the repository settings. The production build is generated in `out/`.
