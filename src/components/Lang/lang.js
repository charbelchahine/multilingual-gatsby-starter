import React, { Component } from 'react';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import { navigate } from 'gatsby';
import { Menu, MenuItem, IconButton, Tooltip } from '@material-ui/core/';
import i18n from '../../i18n/config/i18n';

import Globe from '../../assets/svg/navIcons/globe.svg';

class Lang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            path:
                T.translate('path') && props.path.search(T.translate('path')) === 0
                    ? props.path.replace(T.translate('path'), '')
                    : props.path,
        };
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
        this.handleCloseMenu = this.handleCloseMenu.bind(this);
        this.handleLangChange = this.handleLangChange.bind(this);
    }

    handleOpenMenu(event) {
        this.setState({ anchorEl: event.currentTarget });
    }

    handleCloseMenu() {
        this.setState({ anchorEl: null });
    }

    handleLangChange(event) {
        const { path } = this.state;
        this.handleCloseMenu();
        navigate(event.target.dataset.value + path);
    }

    render() {
        const { anchorEl } = this.state;
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
                        onClick={this.handleOpenMenu}
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
                    onClose={this.handleCloseMenu}
                    classes={{ list: 'langSelectorOptions' }}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    {Object.keys(i18n).map(lang => (
                        <MenuItem
                            key={lang}
                            classes={{ root: 'langSelectorItem' }}
                            data-value={i18n[lang].path}
                            onClick={this.handleLangChange}
                        >
                            {i18n[lang].name}
                        </MenuItem>
                    ))}
                </Menu>
            </>
        );
    }
}

Lang.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Lang;
