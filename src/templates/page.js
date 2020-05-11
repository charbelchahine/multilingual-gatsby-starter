import React from 'react';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import Layout from '../components/Layout/layout';

const seo = {
    title: 'Mountain Central',
    description: 'That is a Gatsby Site hosted on Netlify',
    className: 'mountaincentralPage',
};

const Page = ({ pageContext: { lang }, location: { pathname } }) => (
    <Layout path={pathname} seo={seo}>
        {T.setTexts(lang)}
        <div className="testDiv" />
    </Layout>
);

Page.propTypes = {
    pageContext: PropTypes.shape({
        lang: PropTypes.shape({}),
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

Page.defaultProps = {
    pageContext: {},
    location: {},
};

export default Page;
