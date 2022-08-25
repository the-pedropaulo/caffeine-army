import React, {useState} from 'react';
import { Container, Logo,BoxActions, Action,SearchInput } from './styled';
import LogoutIcon from '@mui/icons-material/Logout';
import StorefrontIcon from '@mui/icons-material/Storefront';

export default ({search, handleSearch }) => {

    const [actionActive, setActionActive] = useState();

   

    return ( 
        <Container>
            <Logo src="/assets/logo.svg"></Logo>
            
            <BoxActions>
                <Action hasStyle={true}>
                    <StorefrontIcon/>
                    <p>LOJAS</p>
                </Action>

                <Action>

                    <LogoutIcon/>
                    <p>SAIR</p>
                </Action>
            </BoxActions>
            
        </Container>
    )
} 