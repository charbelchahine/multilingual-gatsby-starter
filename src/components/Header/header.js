import React from 'react';
import PropTypes from 'prop-types';

import Drawer from '../Drawer/drawer';
import Lang from '../Lang/lang';
import ThemeToggle from '../ThemeToggle/themeToggle';

import Logo from '../../assets/svg/logo.svg';

const Header = ({ path }) => (
    <header>
        <nav>
            <div className="navLHS">
                <Drawer />
            </div>
            <Logo className="navLogo" />
            <div className="navRHS">
                <Lang path={path} />
                <ThemeToggle />
            </div>
        </nav>
    </header>
);

Header.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Header;
