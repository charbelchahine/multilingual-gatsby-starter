import React from 'react';
import { shallow } from 'enzyme';

import Layout from './layout';

describe('Layout', () => {
    let wrapper;
    const path = '/home/404/index';
    const children = <div id="headerChildrenTest">Hello world</div>;

    beforeEach(() => {
        wrapper = shallow(<Layout path={path}>{children}</Layout>);
    });

    it('should render correctly', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should have contain Head & Header by default', () => {
        expect(wrapper.find('Head').exists()).toBe(true);
        expect(wrapper.find('Header').exists()).toBe(true);
    });

    it('should pass `path` to Head & Header', () => {
        expect(wrapper.find('Head').prop('path')).toBe(path);
        expect(wrapper.find('Header').prop('path')).toBe(path);
    });

    it('should pass `children` in its main', () => {
        expect(
            wrapper
                .find('main')
                .find('#headerChildrenTest')
                .exists(),
        ).toBe(true);
    });
});
