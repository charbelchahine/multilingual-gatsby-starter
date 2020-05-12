import React from 'react';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import Helmet from 'react-helmet';
import { TextField, Button } from '@material-ui/core';

import Layout from '../components/Layout/layout';
import '../styles/css/index.css';

const inputClasses = { root: 'contactFormInput' };

const ContactPage = ({ pageContext: { lang }, location: { pathname } }) => (
    <Layout path={pathname}>
        {T.setTexts(lang)}
        <Helmet title={T.translate('contact.title')} />
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
                    Send
                </Button>
            </form>
        </section>
    </Layout>
);

ContactPage.propTypes = {
    pageContext: PropTypes.shape({
        lang: PropTypes.shape({}),
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

ContactPage.defaultProps = {
    pageContext: {},
    location: {},
};

export default ContactPage;
