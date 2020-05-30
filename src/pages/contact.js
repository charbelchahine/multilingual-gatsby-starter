import React from 'react'
import { useTranslation } from 'react-i18next'
import { TextField, Button } from '@material-ui/core'

import Layout from '../components/layout'
import SEO from '../components/seo'

function SecondPage() {
    const { t } = useTranslation('contact')
    const inputClasses = { root: 'contactFormInput' }

    return (
        <Layout>
            <SEO title={t('title')} />
            <h1>{t('title')}</h1>
            <section id="contactForm" className="content">
                <form
                    name="Contact"
                    method="post"
                    className="contactForm"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                >
                    {/* Need to have this hidden input with the form name to your JSX form */}
                    <input type="hidden" name="form-name" value="Contact" />
                    <TextField
                        required
                        id="contactForm-name"
                        name="Name"
                        label="Name"
                        variant="outlined"
                        classes={inputClasses}
                    />
                    <TextField
                        required
                        id="contactForm-email"
                        type="email"
                        name="Email"
                        label="Email"
                        variant="outlined"
                        classes={inputClasses}
                    />
                    <TextField
                        required
                        id="contactForm-inquiry"
                        label="Inquiry"
                        name="Inquiry"
                        multiline
                        variant="outlined"
                        classes={inputClasses}
                    />
                    <Button type="submit" variant="outlined" classes={inputClasses}>
                        {t('submit')}
                    </Button>
                </form>
            </section>
        </Layout>
    )
}

export default SecondPage
