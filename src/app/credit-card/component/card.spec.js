import React from 'react';
import { shallow} from 'enzyme';
import card from './card';

describe('card', () => {
    it('render card component', () => {
        const component = shallow(<card debug />);

        expect(component).toMatchSnapshot();
    })
    it('should render card with given params', () => {

        const component = shallow(<card
            cardNumber={'7667 6767 6565 7676'}
            holderName={'Spak Engineering'}
            cardMonth={'07'}
            cardYear={'34'.toString().substr(-2)}
            cardType={'visa'}
            isFlipped={true}
            focusedSection={'number'}
        />);
        expect(component).toMatchSnapshot();
    });
});