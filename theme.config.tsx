import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import styles from "./theme.module.scss";
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  logo: <span className={styles.logo}>🌌 MULTI PLANETARY</span>,
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  head: (
    <>
      <meta content="Multiplanetary" property="og:site_name"></meta>
      <meta name="theme-color" content="#3c98ed"></meta>
      <meta property="og:description" content="A thought-experiment through the future of mankind. Hand-crafted to inform and inspire." />
      <meta property="og:image" content="https://i.imgur.com/68HSOsa.png" />
      <meta name="twitter:site" content="Multiplanetary"></meta>
      <meta name="twitter:title" content="Multiplanetary"></meta>
      <meta name="twitter:description" content="A thought-experiment through the future of mankind. Hand-crafted to inform and inspire."></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:image:src" content="https://i.imgur.com/68HSOsa.png"></meta>
    </>
  ),
  project: {
    link: 'https://github.com/gianlucajahn/guidetothegalaxy',
  },
  chat: {
    link: 'https://discordapp.com/users/556559991062921217',
  },
  docsRepositoryBase: 'https://github.com/gianlucajahn/guidetothegalaxy',
  footer: {
    text: 'Copyright © 2023 - Multiplanetary | The future of human spaceflight.',
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'de', text: 'Deutsch' }
  ],
  faviconGlyph: "🌌",
  nextThemes: {
    "defaultTheme": "dark"
  },
  useNextSeoProps() {
    const route = useRouter();
    const title = route.pathname.includes('index') ? 'Home - Multiplanetary' : '%s – Multiplanetary';
  
    return {
      titleTemplate: title
    };
  }
}

export default config
