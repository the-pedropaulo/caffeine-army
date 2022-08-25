import React from 'react';
import {Input, Container } from './styled';

export default ({label, placeholder, searchInput, paddingLeft}) => {


    return ( 
        <Container>
            {searchInput === false && (
                <label style={{paddingLeft: paddingLeft, marginBottom: '10px'}}>{label}</label>               
            )
            }
            <Input placeholder={placeholder} paddingLeft={paddingLeft}/> 
        </Container>
    );
}