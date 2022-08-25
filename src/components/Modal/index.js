import React from 'react';
import {Container, ModalBody} from './styled';

export default ({status, close, children}) => {

    function handleCloseModal(e) {
        if(e.target.classList.contains('modalBg')) {
            close(false)
        }
    }

    return (
        <Container status={status} onClick={handleCloseModal} className="modalBg">
            <ModalBody>
                {children}
            </ModalBody>
        </Container>
    )
}