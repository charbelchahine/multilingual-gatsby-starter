import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import slugify from 'slugify';
import { Card, CardContent } from '@material-ui/core';

import Link from '../components/Link/link';
import Layout from '../components/Layout/layout';

const edges = data => {
    return data.allMarkdownRemark.edges;
};

const ProjectIndex = ({ pageContext: { lang, title }, location: { pathname }, data }) => (
    <Layout path={pathname}>
        {T.setTexts(lang)}
        <Helmet title={title} />
        <div className="projectGrid">
            {edges(data).map(({ node }) => (
                <Card key={node.frontmatter.title} className="projectCard">
                    <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                    <CardContent>
                        <Link to={`/${slugify(node.frontmatter.title)}`}>
                            {node.frontmatter.title}
                        </Link>
                        <p>{node.frontmatter.key}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    </Layout>
);

export const query = graphql`
    fragment fixedProjectImage on File {
        childImageSharp {
            fluid(maxWidth: 500, maxHeight: 198, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    query AllMarkdown($key: String) {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { key: { in: [$key] } } }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        key
                        date
                        image {
                            ...fixedProjectImage
                        }
                    }
                }
            }
        }
    }
`;

ProjectIndex.propTypes = {
    pageContext: PropTypes.shape({
        lang: PropTypes.shape({}),
        title: PropTypes.string,
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
    data: PropTypes.shape({}),
};

ProjectIndex.defaultProps = {
    pageContext: {},
    location: {},
    data: {},
};

export default ProjectIndex;
