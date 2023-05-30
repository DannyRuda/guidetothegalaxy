import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import styles from "./theme.module.scss";

const config: DocsThemeConfig = {
  logo: <span className={styles.logo}>🌌 GUIDE TO THE GALAXY</span>,
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  head: (
    <>
      <meta property="og:title" content="Guide To The Galaxy" />
      <meta property="og:description" content="The open-sourced guide on spacetravel." />
      <meta property="og:image" content="./resources/images/hero5.png" />
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
    text: 'Copyright © 2023 - Guide To The Galaxy, the open-sourced guide to spacetravel',
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
    return {
      titleTemplate: '%s – GTTG'
    }
  }
}

export default config
