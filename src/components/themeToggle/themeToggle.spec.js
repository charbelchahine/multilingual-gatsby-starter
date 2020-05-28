import React from 'react'
import { shallow } from 'enzyme'

import ThemeToggle from './themeToggle'

describe('Theme Toggle', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<ThemeToggle />)
    })

    it('should render correctly', () => {
        expect(wrapper.exists()).toBe(true)
    })
})
