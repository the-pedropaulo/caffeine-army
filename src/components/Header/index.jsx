import React, {useState, useLayoutEffect} from 'react';
import { Container, Logo,BoxActions, Action} from './styled';
import LogoutIcon from '@mui/icons-material/Logout';
import StorefrontIcon from '@mui/icons-material/Storefront';

import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';


export default () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [width] = useWindowSize();

    function handleLogoutClick() {
        dispatch({
            type: 'LOGOUT',
            payload: {
                token: '',
                name: '',
                refresh_token: '',
                first_login: '',
                email: '',
                role: '',
            }
        })
        history.push("/");
    }

      
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {

      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }

      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
  }

    return ( 
        <Container>
            <Logo src="/assets/logo.svg"></Logo>

            <BoxActions>
                <Action hasStyle={true} isMobile={width > 780 ? false : true}>
                    <StorefrontIcon/>
                    {width > 780 && (
                        <p>LOJAS</p>
                    )}
                </Action>

                <Action onClick={handleLogoutClick}  isMobile={width > 780 ? false : true}>

                    <LogoutIcon/>
                    {width > 780 && (
                        <p>SAIR</p>
                    )}
                </Action>
            </BoxActions>
            
        </Container>
    )
} 