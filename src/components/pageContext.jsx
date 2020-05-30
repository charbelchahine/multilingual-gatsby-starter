import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const PageContext = React.createContext({})

export function PageContextProvider({ pageContext, children }) {
    const { i18n } = useTranslation()

    useEffect(() => {
        i18n.changeLanguage(pageContext.lang)
    }, [])

    return <PageContext.Provider value={pageContext}>{children}</PageContext.Provider>
}

PageContextProvider.propTypes = {
    children: PropTypes.node,
    pageContext: PropTypes.shape({
        lang: PropTypes.string,
    }),
}

PageContextProvider.defaultProps = {
    children: '',
    pageContext: {},
}

export const usePageContext = () => React.useContext(PageContext)
