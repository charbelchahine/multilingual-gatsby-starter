import React from 'react'
import PropTypes from 'prop-types'

import Header from './header/header'
import Footer from './footer/footer'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="content">
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
