# Antik Zvole – web

Statický web v [Astro](https://astro.build) optimalizovaný na rychlost a SEO. Cíl: poptávka přes formulář nebo telefonát.

## Vývoj

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # výstup do dist/
npm run preview
```

## Struktura

- `src/pages/index.astro` – hlavní stránka (hero s formulářem, služby, vyklízení, postup, oblast, FAQ, CTA)
- `src/pages/zpracovani-osobnich-udaju.astro` – GDPR informace k formuláři
- `src/pages/dekujeme.astro` – stránka po odeslání (noindex, vhodná pro měření konverzí)
- `src/components/LeadForm.astro` – formulář (EmailJS + Cloudinary, bez externích knihoven)
- `src/data/site.ts` – kontakty, provozovatel, lokality, klíče formuláře
- `docs/emailjs-template.html` – šablona e-mailu pro EmailJS

## Nasazení

GitHub Actions (`.github/workflows/deploy.yml`) při pushi do `main` sestaví web a nasadí ho na GitHub Pages.
V nastavení repozitáře je nutné jednou přepnout **Settings → Pages → Source** na **GitHub Actions**.
Doména se bere z `public/CNAME`.
