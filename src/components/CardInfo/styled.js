import styled from 'styled-components';


export const Container = styled.div`
width:100%;
max-width: 1000px;
margin-bottom: 20px;

`;

export const ContentBox = styled.div`
width:100%;
background-color: var(--branco);
padding: 25px 0px 25px 20px;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;

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
`;

export const Title = styled.h2`
font-size: 18px;
`;

export const Arrow = styled.img`
margin-right: 10px;
`;
