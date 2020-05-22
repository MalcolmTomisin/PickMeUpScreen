import React from 'react';

import {
  TextView, ContainerView, LogoView, BannerView,
  IntroTextView, PromptTextView,
} from './styles';

const login = () => {
  return (
    <ContainerView>
      <BannerView>
        <LogoView source={require('../../../assets/logo.png')} />
        <TextView>Pickmeup</TextView>
      </BannerView>
      <IntroTextView>Hey there!</IntroTextView>
      <PromptTextView>Type in your phone number to get started</PromptTextView>
    </ContainerView>
  );
};

export default login;
