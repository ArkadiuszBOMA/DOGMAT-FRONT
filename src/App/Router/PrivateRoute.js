import { Route, Navigate } from 'react-router-dom';
import {authenticate} from "../Authenticate/authenticate";
export { PrivateRoute };

function PrivateRoute({ component: Component, ...rest }) {
    const auth = authenticate.getAppUser();
    return (
        <Route {...rest} render={props => {
            if (!auth) {
                return <Navigate to="/"/>
            }
            return <Component {...props} />
        }} />
    );
}