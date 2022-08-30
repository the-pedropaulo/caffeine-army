import React from 'react';
import {Container, ModalBody} from './styled';

export default ({status, close, children}) => {

    return (
        <Container status={status} onClick={(e) => close(e)} className="modalBg">
            <ModalBody>
                {children}
            </ModalBody>
        </Container>
    )
}