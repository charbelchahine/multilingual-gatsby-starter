import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'

import Layout from '../components/layout'
import SEO from '../components/seo'
import projectPreview from '../components/projectPreview'

const Projects = ({ data }) => {
    const { edges } = data.allMarkdownRemark
    const { t, i18n } = useTranslation('projects')
    const Posts = edges
        // eslint-disable-next-line react/prop-types
        .filter(edge => !!edge.node.frontmatter.date && edge.node.frontmatter.key === i18n.language) // You can filter your posts based on some criteria
        .map(edge => projectPreview(edge))
    return (
        <Layout>
            <SEO title={t('title')} />
            <h1>{t('title')}</h1>
            <div className="projectGrid">{Posts}</div>
        </Layout>
    )
}
export default Projects

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                        key
                        image {
                            childImageSharp {
                                fluid(maxWidth: 1400) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
Projects.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

Projects.defaultProps = {
    data: {},
}
