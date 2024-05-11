import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './public/logo'
import styles from './styles/custom.module.css'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Zenith'
    }
  },
  head:(
    <>
      <link rel="shortcut icon" href="/img/cmslablogo.jpeg" />
      <meta property="og:title" content="CMSLAB" />
      <meta property="og:description" content="The homepage of Zenith Astronomy Club" />
      <meta property="og:image" content="/img/cmslablogo.jpeg" />
    </>
  ),
  logo: (
    <Logo />
  ),
  // project: {
  //   link: 'https://github.com/prayagyadav/zenith/blob/main',
  // },
  chat: {
    link: 'https://zenith-gallery.vercel.app/',
    icon: (
      <p className={styles.centre}>Gallery↗️</p>
    )
  },
  docsRepositoryBase: 'https://github.com/prayagyadav/zenith/blob/main',
  footer: {
    text: '© 2024 Zenith Astronomy Club',
  },
  primaryHue:{dark:212 , light:212 },
  primarySaturation:{dark:80, light:100 },
  search:{placeholder:"Search Zenith"}
}

export default config

