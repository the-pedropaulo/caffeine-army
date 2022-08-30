import React, {} from 'react';
import {
    Container,
    ProductArea,
    ProductButtons
} from './styled';
import Button from '../../Form/Button';


export default ({data, close}) => {


    return (
        <Container>
            <ProductArea>
                <h2>{data.message}</h2>
            </ProductArea>
            <ProductButtons>
                <Button text={'Tentar novamente'} width={'30%'} height={"48px"} isSubmit={true} onClick={close}/>
            </ProductButtons>
        </Container>
    )
}