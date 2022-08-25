import styled from 'styled-components';


export const Container = styled.div`
width:100%;
max-width: 1000px;
margin-bottom: 20px;


`;

export const ContentBox = styled.div`
width:100%;
display: grid;
grid-template-columns: repeat(2, 1fr);

@media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
}

`;
