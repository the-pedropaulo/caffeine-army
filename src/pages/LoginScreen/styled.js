import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
padding: 100px 144px;
@media (max-width: 1200px) {
    padding: 100px 10%;
}
@media (max-width: 768px) {
    padding: 0px 10%;
}
`;

export const BoxContentArea = styled.div`

`;

export const ContentArea = styled.div`
margin-top: 20px;
color: var(--marrom-escuro);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;


export const Logo = styled.img`
height: 40px;
width: 100%;
margin-bottom: 90px;
`;

export const Title = styled.h3`
font-size: 22px;
@media (max-width: 768px) {
display: none;
}
`;

export const FormArea = styled.div`
display: flex;
flex-direction: column;
gap 40px;
width: 100%;
`;

export const ContactArea = styled.div`
font-size: 12px;
margin-top: 300px;
text-align: center;
max-width: 300px;
@media (max-width: 768px) {
    display: none;
}
`;


