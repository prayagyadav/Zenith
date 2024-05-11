import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './public/logo'
import styles from './styles/custom.module.css'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – CMSLab'
    }
  },
  head:(
    <>
      <link rel="shortcut icon" href="/img/cmslablogo.jpeg" />
      <meta property="og:title" content="CMSLAB" />
      <meta property="og:description" content="The homepage of Experimental High Energy Physics and Ultrafast Electronics Lab" />
      <meta property="og:image" content="/img/cmslablogo.jpeg" />
    </>
  ),
  logo: (
    <Logo />
  ),
  project: {
    link: 'https://github.com/prayagyadav/cmslab/blob/main',
  },
  chat: {
    link: 'https://10.4.48.61/',
    icon: (
      <p className={styles.centre}>Internal Wiki↗️</p>
    )
  },
  docsRepositoryBase: 'https://github.com/prayagyadav/cmslab/blob/main',
  footer: {
    text: '© 2024 CMSLab',
  },
  primaryHue:{dark:344.86 , light:344.86 },
  primarySaturation:{dark:80, light:100 },
  search:{placeholder:"Search CMSLab"}
}

export default config

