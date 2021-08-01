import React from 'react';
import { shallow} from 'enzyme';
import form from './card-form';

describe('card', () => {
    it('render card component', () => {
        const component = shallow(<form debug />);

        expect(component).toMatchSnapshot();
    })
});