import React from 'react'
import LanguagePicker from '../languagePicker/languagePicker'
import Drawer from '../drawer/drawer'
import ThemeToggle from '../themeToggle/themeToggle'

import Logo from '../../assets/svg/logo.svg'

const Header = () => (
    <header>
        <nav>
            <div className="navLHS">
                <Drawer />
            </div>
            <Logo className="navLogo" />
            <div className="navRHS">
                <LanguagePicker />
                <ThemeToggle />
            </div>
        </nav>
    </header>
)

export default Header
