/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import { Link } from 'gatsby';

const LocalizedLink = ({ to, openInModal, ...props }) => (
    <Link to={T.translate('path') + to} state={{ modal: openInModal }} {...props} />
);

LocalizedLink.propTypes = {
    to: PropTypes.string.isRequired,
    openInModal: PropTypes.bool,
};

LocalizedLink.defaultProps = {
    openInModal: false,
};

export default LocalizedLink;
