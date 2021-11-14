import React, {useContext} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

export default function PrivateRoute({children, ...rest}) {

    const {authentication} = useContext(AuthContext);
    const [privateAuth] = authentication;

    return (
        <Route {...rest}>
            {privateAuth ? children : <Redirect to="/"/>}
        </Route>
    );
}
