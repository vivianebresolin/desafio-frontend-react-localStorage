import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }: any) {
    const isAunthenticated = true;

    return (
        <Route
            {...rest}
            render={props =>
                isAunthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
}