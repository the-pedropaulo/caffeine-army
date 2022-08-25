import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
padding: 80px 200px;
@media (max-width: 1200px) {
    padding: 100px 10%;
}
@media (max-width: 768px) {
    padding: 0px 6%;
}

@media (max-width: 500px) {
    padding: 0;
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

export const BoxTitle = styled.div`
display: flex;  
width: 100%;
max-width: 1000px;
gap: 20px;

@media (max-width: 768px) {
    max-width: 300px;
}
`;

export const BoxIcon = styled.div`
width: 80px;
height: 80px;
border-radius: 50%;
background-color: rgba(137, 128, 187, 0.15);
opacity: 60%;
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 768px) {
    width: 140px;
    height: 70px;
}
`;


export const Title = styled.h2`

@media (max-width: 768px) {
    font-size: 18px;
}
`;

export const TitleStyle = styled.span`
color: var(--desativado);
`;


export const BoxSearchArea = styled.div`
display: flex;
width: 100%;
max-width: 1000px;
gap: 20px;
border-bottom: 2px solid var(--contornos);
padding-bottom: 40px;
margin-bottom: 60px;

@media (max-width: 768px) {
    padding-left: 20%;

}

`;

export const SearchArea = styled.div`
position:relative;
width: 100%;


@media (max-width: 768px) {
    width: 60%;
}
`;

export const IconSearch = styled.img`
position: absolute;
box-sizing: border-box;
top: 17px;
left: 20px;
width: 30px;
`;

export const InfoArea = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 768px) {
    max-width: 300px;
}
`;

export const SectionTitle = styled.h2`
margin-top: 40px;
font-size: 18px;
`;


