import styled from 'styled-components';

export const Container = styled.div`
background-color: var(--branco);
padding: 20px 8%;
display flex;
justify-content: space-between;
align-items: center;
height: 72px;
`;

export const Logo = styled.img`
height: 20px;
width: auto;

@media (max-width: 768px) {
    height: 14px;
}
`;

export const BoxActions = styled.div`
display: flex;
gap: 20px;
`;


export const Action = styled.div`
color: ${props => props.hasStyle ? 'var(--rosa)' : 'var(--marrom-escuro)'};
width: 120px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #F8F8F8;
margin-bottom: ${props => props.isMobile ? '0' : '-35px'};
padding: 20px 0;
border-top-left-radius: 15px;
border-top-right-radius: 15px;

@media (max-width: 768px) {
    background-color: transparent;
    width: 100%;
}
`;



export const SearchInput = styled.input`
border: 0;
border-radius: 25px;
width: ${props => props.active ? "300px" : "0px"};
height: 50px;
background-color: #FFF;
background-image: url('/assets/search.png');
background-size: 32px;
background-repeat: no-repeat;
background-position: 10px center;
outline: 0;
padding-left: 50px;
transition: all ease 0.2s;
cursor: pointer;

&:focus {
    cursor: text;
}
`;