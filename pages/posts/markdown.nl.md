---
title: Markdown Voorbeelden
date: 2021/12/07
description: Bekijk voorbeelden van alle mogelijke Markdown opties.
tag: web development
author: Kenrick Halff
---

# Markdown Voorbeelden

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Nadruk

**Deze tekst is dik gedrukt**

_Deze tekst is cursief_

~~Doorgestreept~~

## Blockquotes

> Ontwikkel. Controleer. Verstuur. – Vercel

## Lists

Ongeorderd

- Lorem ipsum dolor sit amet
- Consectetur adipiscing elit
- Integer molestie lorem at massa

Georderd

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

## Code

Inline `code`

```js
export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
```

## Tabellen

| **Optie** | **Beschrijving**                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| Eerste      | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. |
| Tweede     | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. |
| Derde      | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. |

## Snelkoppelingen

- [Next.js](https://nextjs.org)
- [Nextra](https://nextra.vercel.app/)
- [Vercel](http://vercel.com)

### Voetnotities

- Voetnotitie [^1].
- Voetnotitie [^2].

[^1]: Voetnotitie **kan markup hebben**

    en meerdere paragrafen.

[^2]: Voetnotitie tekst.
