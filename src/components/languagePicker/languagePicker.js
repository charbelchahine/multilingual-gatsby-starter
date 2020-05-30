import React from 'react'
import { navigate } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { Menu, MenuItem, IconButton, Tooltip } from '@material-ui/core/'

import { currentLanguages } from '../../i18n/config/currentLanguages'
import { usePageContext } from '../pageContext'

import Globe from '../../assets/svg/navIcons/globe.svg'

function LanguagePicker() {
    const { originalPath } = usePageContext()
    const { i18n } = useTranslation()

    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleOpenMenu = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    const handleLangChange = lang => {
        handleCloseMenu()
        i18n.changeLanguage(lang.shorthand)
        navigate(`${lang.path}${originalPath}`)
    }

    return (
        <>
            <Tooltip
                title="Language"
                aria-label="Language"
                classes={{ popper: 'navPopper', tooltip: 'navTooltip' }}
            >
                <IconButton
                    aria-haspopup="true"
                    aria-label="Language Selector"
                    aria-controls="lang-selector"
                    classes={{ root: 'navIconButton' }}
                    color="inherit"
                    onClick={handleOpenMenu}
                >
                    <Globe />
                </IconButton>
            </Tooltip>
            <Menu
                keepMounted
                id="lang-selector"
                disableAutoFocusItem
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                getContentAnchorEl={null}
                onClose={handleCloseMenu}
                classes={{ list: 'langSelectorOptions' }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                {currentLanguages.map(lang => (
                    <MenuItem
                        key={lang.shorthand}
                        classes={{ root: 'langSelectorItem' }}
                        data-test={`languagePicker-option-${lang.shorthand}`}
                        data-value={lang.path}
                        onClick={() => handleLangChange(lang)}
                    >
                        {lang.shorthand.toUpperCase()}
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}

export default LanguagePicker
