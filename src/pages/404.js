import React from 'react';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/layout';
import Link from '../components/Link/link';
import '../styles/css/index.css';

const NotFoundPage = ({ pageContext: { lang }, location: { pathname } }) => (
    <Layout path={pathname}>
        {T.setTexts(lang)}
        <Helmet title={T.translate('e404.title')} />
        <h1>{T.translate('e404.header')}</h1>
        <p>{T.translate('e404.message')}</p>
        <Link to="/">{T.translate('e404.link')}</Link>
    </Layout>
);

NotFoundPage.propTypes = {
    pageContext: PropTypes.shape({
        lang: PropTypes.shape({}),
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

NotFoundPage.defaultProps = {
    pageContext: {},
    location: {},
};

export default NotFoundPage;
