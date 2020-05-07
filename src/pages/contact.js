import React from 'react';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/layout';
import '../styles/css/index.css';

const ContactPage = ({ pageContext: { lang }, location: { pathname } }) => (
    <Layout path={pathname}>
        {T.setTexts(lang)}
        <Helmet title={T.translate('contact.title')} />
        <section id="contactForm" className="content">
            <span>contact me</span>
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
