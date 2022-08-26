import React from 'react';
import { Container, Button } from './styled';

export default ({text, width, height, isSearch, isSubmit}) => {


    return (
      <Container width={width} height={height} isSearch={isSearch}>
        <Button isSearch={isSearch} type={isSubmit ? 'submit' : 'button'}>
          {text}
        </Button> 
      </Container>
      
    );
}
