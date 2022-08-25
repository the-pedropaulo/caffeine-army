import styled from 'styled-components';

export const Container = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: rgba(0,0,0,0.7);
z-index: 10;
display: ${props => props.status === true ? 'flex' : 'none'};
justify-content: center;
align-items: center;
`;

export const ModalBody = styled.div`
max-width: 100vw;
max-height: 90vh;
overflow: auto;
background-color: #fff;
`;
