import styled from 'styled-components';


export const Container = styled.div`
width:100%;
max-width: 1000px;
margin-bottom: 20px;
display: ${props => props.isDescription ? 'flex' : ''};
flex-wrap: ${props => props.isDescription ? 'wrap' : ''};

`;

export const ContentBox = styled.div`
width:100%;
background-color: var(--branco);
padding: 25px 0px 25px 20px;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
border: 1px solid #e2e2e2;

&:nth-child(1) {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

@media (max-width: 768px) {
    background-color: #f8f8f8;

}

`;

export const BoxTitle = styled.div`
width: 100%;
height: 100%;
border-bottom: 2px solid var(--contornos);
background-color: var(--branco);
padding: 10px 0px 10px 20px;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
display: flex;
justify-content: space-between;

border: 1px solid #E2E2E2;


@media (max-width: 768px) {
    background-color: transparent;

}
`;



export const Title = styled.h2`
font-size: 22px;
`;

export const Arrow = styled.img`
margin-right: 10px;

@media (max-width: 768px) {
    margin-right: 40px;
}
`;
