/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'
import PropTypes from 'prop-types'
import './src/i18n/config/i18n'
import './src/styles/css/index.css'
import { PageContextProvider } from './src/components/pageContext'

// /**
//  * Wrap all pages with a Translation provider and set the language on SSR time
//  */
// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element, props }) => {
    // eslint-disable-next-line react/prop-types
    const { pageContext } = props
    return <PageContextProvider pageContext={pageContext}>{element}</PageContextProvider>
}

wrapPageElement.propTypes = {
    props: PropTypes.shape({
        pageContext: PropTypes.shape({}),
    }),
    element: PropTypes.node,
}

wrapPageElement.defaultProps = {
    element: '',
    props: {},
}
