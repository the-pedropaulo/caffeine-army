import React from 'react';
import { Container, Button } from './styled';


export default ({text, width, height, isSearch, isSubmit, ...rest}) => {


    return (
      <Container width={width} height={height} isSearch={isSearch}>
        <Button isSearch={isSearch} type={isSubmit ? 'submit' : 'button'} {...rest}>
          {(text === '') ? (
           <img src={"/assets/arrow-btn.svg"} alt={''}/>
          ) : (
            text
          )}
        </Button> 
      </Container>
      
    );
}
