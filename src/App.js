import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {Menu, PageBody, HomeBody, HomeContainer, LoginContainer} from '../src/AppStyled'

import LoginScreen from './pages/LoginScreen';
import HomeScreen from '../src/pages/auth/HomeScreen';
import PrivateRoute from './components/PrivateRoute';


import Header from '../src/components/Header'

export default () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginContainer>
                        <Menu/>
                        <PageBody>
                            <LoginScreen />
                        </PageBody>
                    </LoginContainer>
                </Route>

                <PrivateRoute exact path="/adm">
                    <HomeContainer>
                            <Header/>
                            <HomeBody>
                                <HomeScreen />
                            </HomeBody>
                    </HomeContainer>
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    );
}