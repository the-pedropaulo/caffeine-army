import React, {} from 'react';
import {
    Container,
    ProductArea
} from './styled';


export default ({close}) => {
    function handleCloseModal() {
        close(false);
    }

    return (
        <Container>
            <ProductArea onClick={handleCloseModal}>
                <h2>Adicione uma nova loja</h2>
            </ProductArea>
        </Container>
    )
}