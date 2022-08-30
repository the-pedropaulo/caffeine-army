import styled from 'styled-components';



export const LoginContainer = styled.div`
display: flex;
height: 100vh;
background-color: var(--branco);
@media (max-width: 768px) {
    flex-direction: column;
}
`;

export const HomeContainer = styled.div`
display: flex;
height: 100vh;
background-color: var(--branco);
flex-direction: column;
`;

export const Menu = styled.div`
background-image: url('/assets/bg-caffeine.png');
background-size: cover;
width: 50%;
@media (max-width: 768px) {
    width: 100%;
    height: 26%;
}
`;
export const PageBody = styled.div`
display: flex;
flex: 1;
overflow-y: auto;

`;

export const HomeBody = styled.div`
display: flex;
flex: 1;
background-color: #f8f8f8;
overflow-y: auto;
overflow-x: hidden;
`;


