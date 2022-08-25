import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    Container,
    ProductArea,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductName,
    ProductIngredients,
    ProductQuantityArea,
    ProductQuantity,
    ProductQtImage,
    ProductQtText,
    ProductPrice,
    ProductButtons,
    ProductButton
} from './styled';


export default ({data, close}) => {
    const dispatch = useDispatch();

    const [qt, setQt] = useState(1);

    function handleCloseModal(e) {
        close(false);
    }
    
    function handleMinusQt() {
        if(qt > 1) {
            setQt(qt - 1);
        }
    }

    function handlePlusQt() {
        setQt(qt + 1);
    }

    useEffect(() => {
        setQt(1);
    }, [data])

    function handleAddToCart() {
        dispatch({
            type: 'ADD_PRODUCT',
            payload: {
                data,
                qt
            }
        });
        close(false);
    }
    

    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image}/>
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQtImage src='/assets/minus.png' onClick={handleMinusQt}/>
                            <ProductQtText>{qt}</ProductQtText>
                            <ProductQtImage src='/assets/plus.png' onClick={handlePlusQt}/>
                        </ProductQuantity>
                        <ProductPrice>R$ {(data.price * qt).toFixed(2)}</ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton type='small' onClick={handleCloseModal}>Cancelar</ProductButton>
                <ProductButton onClick={handleAddToCart}>Adicionar ao Carrinho</ProductButton>
            </ProductButtons>
        </Container>
    )
}