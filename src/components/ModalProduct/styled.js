import styled from 'styled-components';

export const Container = styled.div`
width: 740px;
padding: 10px;
`;
export const ProductArea = styled.div`
height: 200px;
display:flex;
`;
export const ProductPhoto = styled.img`
width: 310px;
border-radius: 10px;
`;
export const ProductInfoArea = styled.div`
flex:1;

display: flex;
flex-direction: column;
justify-content: space-between;
margin-left: 10px;
`;
export const ProductDetails = styled.div`

`;

export const ProductName = styled.div`
font-size: 30px;
font-weight: bold;
`;

export const ProductIngredients = styled.div`
font-size: 14px;
`;

export const ProductQuantityArea = styled.div`
height: 50px;
display: flex;
justify-content: space-between;
`;

export const ProductQuantity = styled.div`
display: flex;
align-items: center;
background: #073c07;
border-radius: 5px;
padding: 10px;
`;

export const ProductQtImage = styled.img`
width: 24px;
height: auto;
`;

export const ProductQtText = styled.div`
font-size: 25px;
font-weight: bold;
color: #fff;
margin: 0 10px;
`;

export const ProductPrice = styled.div`
font-size: 30px;
font-weight: bold;
`;


export const ProductButtons = styled.div`
margin-top:10px;
display: flex;
justify-content: flex-end;
align-items: flex-end;
`;

export const ProductButton = styled.button`
border: 0;
background-color: #073c07;
box-shadow: 4px 5px 0px #888;
color: #fff;
font-size: ${props => props.type === 'small' ? '13px' : '22px'};
font-weight: bold;
padding: ${props => props.type === 'small' ? '5px 10px' : '10px 20px'};
margin-left: 10px;
border-radius: 5px;
`;
