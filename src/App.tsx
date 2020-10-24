import { TOKEN_KEY } from 'constants/globalConstants';
import Register from 'containers/register/register.component';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { appStored } from 'services';
import { verifyTokenAction } from 'store/actions/auth.action';

interface IAppProps {}

const App: React.FC<IAppProps> = () => {
    const dispatch = useDispatch();
    const token = appStored.getItem<string | null>(TOKEN_KEY);
    React.useEffect(() => {
        if (token) {
            dispatch(verifyTokenAction(token));
        }
    }, [token]);
    return (
        <React.Fragment>
            <Switch>
                <Route path="/register" component={Register} />
            </Switch>
        </React.Fragment>
    );
};

export default App;
