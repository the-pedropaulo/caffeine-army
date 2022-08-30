import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default ({children, ...rest}) => {

    const token = useSelector(state => state.user.token);

    const history = useHistory();

    if(!token) {
        history.push('/');
        return null;
    }

    return (
        <Route {...rest}>{children}</Route>
    )
}