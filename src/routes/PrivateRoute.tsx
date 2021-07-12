import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function PrivateRoute({ component: Component, ...rest }: any) {
    const { isAuthenticated } = useAuth();

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
}