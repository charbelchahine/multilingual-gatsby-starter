/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import React from 'react'
 import PropTypes from 'prop-types'
 import { Helmet } from 'react-helmet'
 import { useStaticQuery, graphql } from 'gatsby'
 import { useTranslation } from 'react-i18next'
 
 import { usePageContext } from './pageContext'
 import { Homepage } from '../utils/navLinks'
 
 function SEO({ description, meta, title, image, alreadyTranslated }) {
     const { site } = useStaticQuery(
         graphql`
             query {
                 site {
                     siteMetadata {
                         title
                         description
                         image
                         url
                         author
                     }
                 }
             }
         `,
     )
     const { lang, originalPath } = usePageContext()
     const { t, i18n } = useTranslation()
 
     const isHomepage = originalPath === Homepage.path
     const translatedString = string => (alreadyTranslated ? string : t(string, { lng: lang }))
 
     const metaTitle = isHomepage
         ? site.siteMetadata.title
         : `${translatedString(title)} | ${site.siteMetadata.title}`
     const metaDescription = description
         ? translatedString(description)
         : site.siteMetadata.description
     const metaImage = `${site.siteMetadata.url}${image || site.siteMetadata.image}`
 
     return (
         <Helmet
             htmlAttributes={{ lang: i18n.language ? i18n.language : 'en' }}
             title={title}
             titleTemplate={metaTitle}
             meta={[
                 {
                     name: `description`,
                     content: metaDescription,
                 },
                 {
                     name: `image`,
                     content: metaImage,
                 },
                 {
                     property: `og:title`,
                     content: metaTitle,
                 },
                 {
                     property: `og:description`,
                     content: metaDescription,
                 },
                 {
                     property: `og:type`,
                     content: `website`,
                 },
                 {
                     property: `og:url`,
                     content: site.siteMetadata.url,
                 },
                 {
                     property: `og:image`,
                     content: metaImage,
                 },
                 {
                     property: `og:locale`,
                     content: lang,
                 },
                 {
                     name: `twitter:card`,
                     content: `summary_large_image`,
                 },
                 // {
                 //     name: `twitter:creator`,
                 //     content: site.siteMetadata.author,
                 // },
                 {
                     name: `twitter:title`,
                     content: metaTitle,
                 },
                 {
                     name: `twitter:description`,
                     content: metaDescription,
                 },
                 {
                     name: `twitter:url`,
                     content: site.siteMetadata.url,
                 },
                 {
                     property: `twitter:image`,
                     content: metaImage,
                 },
             ].concat(meta)}
         />
     )
 }
 
 SEO.defaultProps = {
     meta: [],
     alreadyTranslated: false,
     description: '',
     image: '',
 }
 
 SEO.propTypes = {
     alreadyTranslated: PropTypes.bool,
     description: PropTypes.string,
     meta: PropTypes.arrayOf(PropTypes.object),
     title: PropTypes.string.isRequired,
     image: PropTypes.string,
 }
 
 export default SEO