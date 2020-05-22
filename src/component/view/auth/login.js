import React from 'react';

import { TextView, ContainerView,LogoView } from './styles';

const login = () => {
  return (
    <ContainerView>
      <LogoView source={require('../../../assets/logo.png')}/>
      <TextView>login Screen</TextView>
    </ContainerView>
  );
};

export default login;
