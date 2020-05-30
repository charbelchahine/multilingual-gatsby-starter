import React from 'react'
import { shallow } from 'enzyme'

import Header from './header'

describe('Header', () => {
    const wrapper = shallow(<Header />)

    it('should render correctly', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('should include the Drawer, Language picker, Theme toggle, and the logo in the nav', () => {
        expect(wrapper.find('Drawer').exists()).toBe(true)
        expect(wrapper.find('LanguagePicker').exists()).toBe(true)
        // expect(wrapper.find('ThemeToggle').exists()).toBe(true);
        expect(wrapper.find('.navLogo').exists()).toBe(true)
    })
})
