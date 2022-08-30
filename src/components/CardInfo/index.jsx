import React from 'react';
import { Container, ContentBox, BoxTitle,Title, Arrow} from './styled';

export default ({children, title, isDescription}) => {

    return (
      <Container isDescription={isDescription}>
        {title && (
        <BoxTitle>
          <Title data-testid="tDHdjhgsa">{title}</Title>
          <Arrow src="/assets/arrow.svg"/>
        </BoxTitle>
        )}
        <ContentBox>
           {children}
        </ContentBox>
      </Container>
      
    );
}
