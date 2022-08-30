import styled from 'styled-components';


export const Container = styled.div`
width: ${props => props.width ? props.width : "50px"};
height: ${props => props.height ? props.height : "48px"};

@media (max-width: 768px) {
    width:  ${props => props.isSearch ? props.isSearch : "100%"};;
}
`;

export const Button = styled.button`
width: 100%;
height: 100%;
padding: 10px;
background-color: var(--rosa);
border: none;
outline: none;
color: var(--branco);
border-radius: 4px;
font-size: 18px;
font-weight: bold;
cursor: pointer;

@media (max-width: 768px) {
    background-color:  ${props => props.isSearch ? 'var(--desativado)' : "var(--rosa)"};;
}
`;
