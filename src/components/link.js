/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { currentLanguages } from '../i18n/config/currentLanguages'

const Link = ({ to, ref, ...rest }) => {
    const { i18n } = useTranslation()
    const currentLanguage = currentLanguages.find(language => i18n.language === language.shorthand)

    return <GatsbyLink {...rest} to={`${currentLanguage.path}${to}`} />
}

Link.propTypes = {
    to: PropTypes.string,
    ref: PropTypes.shape({}),
}

Link.defaultProps = {
    to: '',
    ref: {},
}

export default Link
