import React from 'react'
import { shallow } from 'enzyme'

import LanguagePicker from './languagePicker'

describe('Layout', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<LanguagePicker />)
    })

    it('should render correctly', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('should have EN & FR options', () => {
        expect(wrapper.find('[data-test="languagePicker-option-en"]').exists()).toBe(true)
        expect(wrapper.find('[data-test="languagePicker-option-fr"]').exists()).toBe(true)
    })

    it('should pass EN & FR  paths to their options', () => {
        expect(wrapper.find('[data-test="languagePicker-option-en"]').prop('data-value')).toBe('')
        expect(wrapper.find('[data-test="languagePicker-option-fr"]').prop('data-value')).toBe(
            '/fr',
        )
    })
})
