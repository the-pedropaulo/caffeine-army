import React from 'react';
import { Container, Button } from './styled';

export default ({text, width, height, isSearch}) => {


    return (
      <Container width={width} height={height} isSearch={isSearch}>
        <Button isSearch={isSearch}>
          {text}
        </Button> 
      </Container>
      
    );
}
