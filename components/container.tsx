import React from 'react';
import { styled } from 'baseui';

const ContainerStyled = styled('div', {
  width: '100%',
  maxWidth: '1070px',
  paddingLeft: '15px',
  paddingRight: '15px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,

  '@media screen and (max-width: 1200px)': {
    maxWidth: '970px',
  },
});

const Container: React.FC = props => {
  return <ContainerStyled> {props.children} </ContainerStyled>;
};

export default Container;
