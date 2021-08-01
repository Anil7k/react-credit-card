import React from 'react';
import { shallow } from 'enzyme';
import selector from '../../../component/selector/';

describe('selector', () => {
  it('render selector component', () => {
    const component = shallow(<selector debug />);

    expect(component).toMatchSnapshot();
  })
  it('should render selector with given params', () => {
    const component = shallow(<selector
        onChange={''}
        value={'2021'}
        selectorList={''}
        placeholder={'Year'}
        onCardFocus={''}
        onCardBlur={''}
    />);
    expect(component).toMatchSnapshot();
  });
});