import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IconButton, SwipeableDrawer, Tooltip } from '@material-ui/core'

import Link from '../link'
import NavLinks from '../../utils/navLinks'

import Menu from '../../assets/svg/navIcons/menu.svg'

const Drawer = () => {
    const { t } = useTranslation()
    const [openDrawer, setDrawerOpen] = useState(false)
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

    const toggleDrawer = open => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }
        setDrawerOpen(open)
    }

    const mobileNavContents = (
        <div
            role="presentation"
            className="drawerContents"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            {NavLinks.map(navLink => (
                <Link to={navLink.path} key={navLink.id} className="navLink">
                    {t(`${navLink.id}:title`)}
                </Link>
            ))}
        </div>
    )

    return (
        <>
            <Tooltip
                title="Menu"
                aria-label="Menu"
                classes={{ popper: 'navPopper', tooltip: 'navTooltip' }}
            >
                <IconButton
                    aria-label="menu"
                    classes={{ root: 'navIconButton' }}
                    color="inherit"
                    onClick={toggleDrawer(true)}
                    data-test="drawer-button"
                >
                    <Menu />
                </IconButton>
            </Tooltip>
            <SwipeableDrawer
                open={openDrawer}
                classes={{ paper: 'drawer' }}
                disableDiscovery={iOS}
                onOpen={toggleDrawer(true)}
                onClose={toggleDrawer(false)}
                disableBackdropTransition={!iOS}
                data-test="drawer-sidebar"
            >
                {mobileNavContents}
            </SwipeableDrawer>
        </>
    )
}

export default Drawer
