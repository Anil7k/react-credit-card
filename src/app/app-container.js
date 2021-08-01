import { BrowserRouter, Switch, Route } from 'react-router-dom';
import creditCardContainer from './credit-card';

const AppContainer = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={creditCardContainer} />
            </Switch>
        </BrowserRouter >
    )
}

export default AppContainer;