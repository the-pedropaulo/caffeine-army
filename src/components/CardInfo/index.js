import React from 'react';
import { Container, ContentBox, BoxTitle,Title, Arrow} from './styled';

export default ({children, title}) => {

    return (
      <Container>
        {title && (
        <BoxTitle>
          <Title>{title}</Title>
          <Arrow src="/assets/arrow.svg"/>
        </BoxTitle>
        )}
        <ContentBox>
           {children}
        </ContentBox>
      </Container>
      
    );
}
