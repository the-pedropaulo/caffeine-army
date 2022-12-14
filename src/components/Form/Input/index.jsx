import React from 'react';
import {InputField, Container } from './styled';

const Input = ({label, placeholder, searchInput, paddingLeft, error, ...rest}, ref) => {
    return ( 
        <Container>  
            {searchInput === false && (
                <label style={{paddingLeft: paddingLeft, marginBottom: '10px'}} data-testid="lasGHDGSHDnn">{label}</label>               
            )
            }
            <InputField placeholder={placeholder} paddingLeft={paddingLeft} ref={ref}
          {...rest} data-testid="indHDHSkkfcj"/> 
            {error && <span style={{color: 'red', marginTop: '10px'}}>{error.message}</span>}
        </Container>
    );
}

export default React.forwardRef(Input);