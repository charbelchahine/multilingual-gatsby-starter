import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Card, CardContent } from '@material-ui/core'

import Layout from '../components/layout'
import SEO from '../components/seo'

const featuredImage = data => data.markdownRemark.frontmatter.image.childImageSharp.gatsbyImageData
function Template({ data }) {
    // this data prop will be injected by the GraphQL query below.
    const { frontmatter, html } = data.markdownRemark // data.markdownRemark holds your post data
    const imagePath = getSrc(featuredImage(data))
    
    return (
        <Layout>
            <SEO 
                title={frontmatter.title}  
                description={frontmatter.description}
                image={imagePath}
                alreadyTranslated/>
            <Card>
                <GatsbyImage image={featuredImage(data)} alt={frontmatter.title}/>
                <CardContent>
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                    <Markdown rehypePlugins={[rehypeRaw]}>{html}</Markdown>
                </CardContent>
            </Card>
        </Layout>
    );
}

export const pageQuery = graphql`query ($originalPath: String!, $lang: String!) {
  markdownRemark(frontmatter: {slug: {eq: $originalPath}, key: {eq: $lang}}) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
      template
      key
      slug
      image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
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
                description: PropTypes.string,
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
