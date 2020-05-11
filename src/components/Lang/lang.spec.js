import React from 'react';
import { shallow } from 'enzyme';

import Lang from './lang';

describe('Layout', () => {
    let wrapper;
    const path = '/home/404/index';

    beforeEach(() => {
        wrapper = shallow(<Lang path={path} />);
    });

    it('should render correctly', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should render state from props by default', () => {
        expect(wrapper.state().path).toBe(path);
    });

    it('should have EN & FR options', () => {
        expect(wrapper.find('[children="EN"]').exists()).toBe(true);
        expect(wrapper.find('[children="FR"]').exists()).toBe(true);
    });

    it('should pass EN & FR  paths to their options', () => {
        expect(wrapper.find('[children="EN"]').prop('data-value')).toBe('');
        expect(wrapper.find('[children="FR"]').prop('data-value')).toBe('/fr');
    });

    describe('the menu component', () => {
        it('should set the anchor to the langMenu upon IconButton click', () => {
            const mockedEvent = { currentTarget: 'LangMenu' };
            wrapper.find('WithStyles(ForwardRef(IconButton))').simulate('click', mockedEvent);
            expect(wrapper.state().anchorEl).toBe('LangMenu');
            expect(wrapper.find('WithStyles(ForwardRef(Menu))').props().anchorEl).toBe('LangMenu');
        });

        it('should set the anchor to null upon MenuItem click', () => {
            const mockedEvent = { target: { dataset: { value: '' } } };
            wrapper.setState({ anchorEl: 'LangMenu' });
            expect(wrapper.state().anchorEl).toBe('LangMenu');
            wrapper.find('[children="EN"]').simulate('click', mockedEvent);
            expect(wrapper.state().anchorEl).toBe(null);
        });
    });
});
