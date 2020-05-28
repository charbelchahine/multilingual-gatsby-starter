import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Markdown from 'react-markdown'
import { Card, CardContent } from '@material-ui/core'

import Layout from '../components/layout'
import SEO from '../components/seo'

const featuredImage = data => {
    return data.markdownRemark.frontmatter.image.childImageSharp.fluid
}

function Template({ data }) {
    // this data prop will be injected by the GraphQL query below.
    const { frontmatter, html } = data.markdownRemark // data.markdownRemark holds your post data

    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <Card>
                <Img fluid={featuredImage(data)} />
                <CardContent>
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                    <Markdown source={html} escapeHtml={false} />
                </CardContent>
            </Card>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($originalPath: String!, $lang: String!) {
        markdownRemark(frontmatter: { slug: { eq: $originalPath }, key: { eq: $lang } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                template
                key
                slug
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
`

Template.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({
                title: PropTypes.string,
                date: PropTypes.string,
            }),
            html: PropTypes.string,
        }),
    }),
}

Template.defaultProps = {
    data: {},
}

export default Template
