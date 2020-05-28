import React from 'react'
import { shallow } from 'enzyme'

import Drawer from './drawer'

describe('Drawer', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Drawer />)
    })

    it('should render correctly', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('should have the drawer closed by default', () => {
        expect(wrapper.find('[data-test="drawer-sidebar"]').prop('open')).toBe(false)
    })

    it('should open the drawer on button click', () => {
        wrapper.find('[data-test="drawer-button"]').simulate('click', {})
        expect(wrapper.find('[data-test="drawer-sidebar"]').prop('open')).toBe(true)
    })
})
