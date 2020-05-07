import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import T from 'i18n-react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import parse from 'html-react-parser';
import Layout from '../components/Layout/layout';

const headerImage = data => {
    return data.markdownRemark.frontmatter.image.childImageSharp.fluid;
};

const Projects = ({ pageContext: { lang, html, title }, location: { pathname }, data }) => (
    <Layout path={pathname}>
        {T.setTexts(lang)}
        <Helmet title={title} />
        <Img fluid={headerImage(data)} />
        {parse(html)}
    </Layout>
);

export const query = graphql`
    fragment fixedFeaturedImage on File {
        childImageSharp {
            fluid(maxWidth: 1400, maxHeight: 555, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    query Markdown($filePath: String!) {
        markdownRemark(fileAbsolutePath: { eq: $filePath }) {
            frontmatter {
                image {
                    ...fixedFeaturedImage
                }
            }
        }
    }
`;

Projects.propTypes = {
    data: PropTypes.shape({}),
    pageContext: PropTypes.shape({
        lang: PropTypes.shape({}),
        title: PropTypes.string,
        html: PropTypes.string,
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

Projects.defaultProps = {
    pageContext: {},
    location: {},
    data: {},
};

export default Projects;
