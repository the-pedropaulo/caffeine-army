import React from 'react';
import { Container, CategoryImage } from './styled';

export default ({data, categoryActive, setCategoryActive}) => {

    function handleCategoryClick() {
        setCategoryActive(data.id);
    }

    return (
        <Container active={categoryActive} id={data.id} data-tip={data.name} data-for='tip-top'>
            <CategoryImage src={data.image} onClick={handleCategoryClick}/>
        </Container>
    )
}