import React from 'react';
import useDarkMode from 'use-dark-mode';
import { IconButton, Tooltip } from '@material-ui/core/';

import ThemeIcon from '../../assets/svg/navIcons/theme.svg';

const ThemeToggle = () => {
    const darkMode = useDarkMode(false);

    const themeLabel = darkMode.value ? 'Light Mode' : 'Dark Mode';

    return (
        <Tooltip
            title={themeLabel}
            aria-label={themeLabel}
            classes={{ popper: 'navPopper', tooltip: 'navTooltip' }}
        >
            <IconButton
                aria-label="Theme Toggle"
                classes={{ root: 'navIconButton' }}
                color="inherit"
                onClick={darkMode.toggle}
            >
                <ThemeIcon />
            </IconButton>
        </Tooltip>
    );
};

export default ThemeToggle;
