# SolidLingua - SolidStart i18n Template

A Starter Template for [SolidStart](https://docs.solidjs.com/solid-start) that comes pre-configured with internationalization (i18n) support and language-based routing.

This template provides a clean foundation for projects that need multilingual support with route parameters such as `/en/...` or `/pt/...` , etc.

## Table of Contents

- [SolidLingua - SolidStart i18n Template](#solidlingua---solidstart-i18n-template)
  - [Table of Contents](#table-of-contents)
  - [✨ Features](#-features)
    - [Project Structure](#project-structure)
  - [🚀 Getting Started](#-getting-started)
  - [Usage](#usage)
    - [Example: Using i18n in a Component](#example-using-i18n-in-a-component)
      - [1. TypeScript Dictionary](#1-typescript-dictionary)
      - [2. Component Usage](#2-component-usage)
      - [Explanation:](#explanation)
  - [Customization](#customization)
  - [🙏 Special Thanks](#-special-thanks)

## ✨ Features

- ⚡ Built on **SolidStart** (SolidJS + Vite + File-based Routing)  
- 🌍 **i18n ready** with dictionary setup and `I18nProvider` included  
- 🔀 **Language parameterized routing** (`/:lang/...`)  
- 🛠 Fallback to `"default"` if an invalid language parameter is provided  
- ✅ Route files include `export default` for proper file-based routing  
- 🔗 Pre-configured redirect handling (e.g., `pt` → `pt-br`)

---

### Project Structure

```txt
.
├── app.config.ts
├── package.json
├── pnpm-lock.yaml
├── public
│   └── favicon.ico
├── README.md
├── src
│   ├── app.css
│   ├── app.tsx                # Root entry with I18nProvider
│   ├── components             # Reusable UI components
│   ├── entry-client.tsx
│   ├── entry-server.tsx
│   ├── global.d.ts
│   ├── i18n
│   │   ├── config.ts          # i18n configuration
│   │   ├── dictionaries
│   │   │   ├── en
│   │   │   │   └── ui.ts      # English dictionary
│   │   │   ├── index.ts       # Dictionary export/loader
│   │   │   └── pt-br
│   │   │       └── ui.ts      # Brazilian Portuguese dictionary
│   │   ├── helpers.ts         # Utility functions for i18n
│   │   ├── i18n-context.tsx   # Context + provider
│   │   └── translator.ts      # Translation logic
│   └── routes
│       ├── [...404].tsx       # Custom 404 page
│       ├── index.tsx          # Redirects to default lang
│       └── [lang]
│           └── index.tsx      # Example localized page
└── tsconfig.json
```

## 🚀 Getting Started

1. Clone this repo

```bash
git clone https://github.com/PixelP4radise/SolidLingua.git
```

2. Install dependencies

```bash
npm install
# or
pnpm install
```

3. Run in dev mode

```bash
npm run dev
# or
pnpm run dev
```

4. Build & preview

```bash
npm run build
npm run preview
# or
pnpm run build
pnpm run preview
```

## Usage

- Visit /en → loads the English dictionary.
- Visit /pt-br → loads the Brazilian Portuguese dictionary.
- Visit /invalid-lang → gracefully falls back to the "default" language.

The useParam("lang") hook is used to read the language from the route, which drives dictionary selection.

### Example: Using i18n in a Component

#### 1. TypeScript Dictionary

```ts
// src/i18n/dictionaries/en/ui.ts
export default {
  "hero.title": "UIs with Fine-Grained Reactivity, effortlessly.",
  "hero.subtitle": "Solid is a modern framework for today’s web.",
  "hero.button.primary": "Get Started",
  "hero.button.secondary": "Join the Community",
  "pagination.next": "Next",
  "pagination.previous": "Previous",
  "missing.translation": "This section has not been translated yet",
} as const;
```

#### 2. Component Usage

```tsx
import { Show } from "solid-js";
import { useI18n } from "~/i18n/i18n-context";

export default function LandingPage() {
  const i18n = useI18n();

  return (
    <>
      {/* Safe rendering with <Show>: waits until i18n.t is available */}
      <Show when={i18n.t}>
        <h1>{i18n.t("hero.title")}</h1>
        <button>{i18n.t("hero.button.primary")}</button>
      </Show>

      {/* Direct rendering: may cause errors if i18n.t is not ready yet */}
      <h2>{i18n.t?.("hero.subtitle") ?? "Loading..."}</h2>
    </>
  );
}
```

#### Explanation:

- `<Show>` ensures the component only renders when i18n.t is available.
- The second example uses optional chaining (?.) with a fallback (?? "Loading...") to avoid runtime errors.
- This demonstrates best practices for conditionally rendering translations in SolidStart.

## Customization

- Add more dictionaries inside `src/i18n/dictionaries` and update the dictionaries collection at `src/i18n/dictionaries/index.ts`
- Update the fallback language in `src/i18n/dictionaries/index.ts`
- Add new localized routes under `src/routes/[lang]`

---

## 🙏 Special Thanks

A huge thanks to [Martin Rapp](https://github.com/madaxen86) for his help in setting up this template and guiding the initial configuration.
