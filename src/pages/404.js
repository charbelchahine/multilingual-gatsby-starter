import React from 'react'
import { useTranslation } from 'react-i18next'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Link from '../components/link'

function NotFoundPage() {
    const { t } = useTranslation('error404')

    return (
        <Layout>
            <SEO title={t('title')} />
            <h1>{t('header')}</h1>
            <p>{t('message')}</p>
            <Link to="/">{t('link')}</Link>
        </Layout>
    )
}

export default NotFoundPage
