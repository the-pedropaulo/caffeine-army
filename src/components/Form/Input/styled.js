import styled from 'styled-components';

export const Container = styled.div`
width:100%;
display: flex;
flex-direction: column;
`;
export const InputField = styled.input`  
height: 48px;
outline: none;
border: 1px solid var(--rosa);
border-radius: 4px;
padding: 5px 0;
padding-left: ${props => props.paddingLeft ? props.paddingLeft : '20px'};
font-size: 21px;
`;
