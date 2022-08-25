import React from 'react';
import { Container, ContentBox} from './styled';

export default ({options, corresponding}) => {

    return (
      <Container>
        <ContentBox>
            {options.map((option, index) => (
                <p key={index}><strong>{option}: </strong>{corresponding[index]}</p>
            ))}
          

        </ContentBox>
      </Container>
      
    );
}
