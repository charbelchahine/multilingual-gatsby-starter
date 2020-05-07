import React from 'react';
import { shallow } from 'enzyme';

import Header from './header';

describe('Header', () => {
    const wrapper = shallow(<Header path="/" />);

    it('should render correctly', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should include the Drawer, Language selector, Theme toggle, and the logo in the nav', () => {
        expect(wrapper.find('Drawer').exists()).toBe(true);
        expect(wrapper.find('Lang').exists()).toBe(true);
        expect(wrapper.find('ThemeToggle').exists()).toBe(true);
        expect(wrapper.find('.navLogo').exists()).toBe(true);
    });

    it('should pass its path to the language selector', () => {
        const newPath = '/about';
        wrapper.setProps({ path: newPath });
        expect(wrapper.find('Lang').prop('path')).toBe(newPath);
    });
});
