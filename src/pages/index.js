import React from 'react'
import { useTranslation } from 'react-i18next'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

function IndexPage() {
    const { t } = useTranslation('homepage')

    return (
        <Layout>
            <SEO title="homepage:title" />
            <StaticImage src="../assets/images/homeHeader.png" alt={t('title')} />
            <h1>{t('welcome')}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus imperdiet,
                iaculis ipsum quis, egestas turpis. Nullam bibendum a ex at elementum. Praesent
                bibendum enim ut nisi molestie dignissim. Aliquam ut magna semper, sodales leo eget,
                malesuada risus. Integer tempor semper lectus vitae ultrices. Aenean consequat nibh
                ac turpis luctus, eu cursus leo congue. Duis dignissim lorem at mattis pharetra.
                Nullam in justo blandit, aliquet elit at, sodales ante. Fusce tempus metus et eros
                fringilla, et volutpat turpis ullamcorper. Suspendisse tempus nibh eu turpis
                laoreet, at imperdiet felis semper. Nam consequat arcu non est feugiat egestas
                dictum maximus arcu. Sed rutrum odio ac nisi finibus tempus. Vestibulum lobortis
                nisl ligula, quis mattis arcu malesuada hendrerit. Proin mollis dolor vel diam
                feugiat, a tristique libero placerat. Fusce egestas justo non viverra blandit.
            </p>
        </Layout>
    )
}

export default IndexPage
