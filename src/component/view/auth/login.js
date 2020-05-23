import React, {useState,useEffect} from 'react';
import { formatNumber } from "libphonenumber-js";
import {
  TextView,
  ContainerView,
  LogoView,
  BannerView,
  IntroTextView,
  PromptTextView,
  PhoneContainerView,
  InputView,
  OutlineButton,
  ButtonText,
  BottomCard,
  FacebookIcon,
  FacebookButton,
  BottomContainer,
  BottomTextContainer,
  BottomText,
  InputViewContainer,
} from './styles';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import PhoneInput from '../../widget/phoneInput';
import CountryPicker from '../../widget/countryPicker';

const login = () => {
  const [countryCode, setCountryCode] = useState('NG');
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(
    false
  );
  const [phoneNumber, setPhoneNumber] = useState('');
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true)
  const [withFilter, setWithFilter] = useState(true)
  const [withCallingCode, setWithCallingCode] = useState(true)
  const onBlur = () => {
    const formattedNumber = formatNumber(`+234${phoneNumber.replace(/^\+64/, "")}`, "International")
    setPhoneNumber(formattedNumber);
  };
   const onSelect = (country) => {
     setCountryCode(country.cca2);
     setCountry(country);
   };

  return (
    <ContainerView>
      <BannerView>
        <LogoView source={require('../../../assets/logo.png')} />
        <TextView>Pickmeup</TextView>
      </BannerView>
      <IntroTextView>Hey there!</IntroTextView>
      <PromptTextView>
        Type in your phone number to get started
      </PromptTextView>
      <PhoneContainerView>
        <InputViewContainer>
          <CountryPicker
            {...{
              countryCode,
              withFilter,
              withFlag,
              withCountryNameButton,
              withCallingCode,
              withEmoji,
              onSelect,
            }}
            visible
          />
        </InputViewContainer>
        <InputView
          placeholder="0800 000 0000"
          onBlur={onBlur}
          onChangeText={setPhoneNumber}
          hideUnderline
          value={phoneNumber}
          keyboardType={'phone-pad'}
        />
        <OutlineButton>
          <ButtonText>GO</ButtonText>
        </OutlineButton>
      </PhoneContainerView>
      <BottomContainer>
        <BottomTextContainer>
          <BottomText>or you can sign in with</BottomText>
        </BottomTextContainer>
        <BottomCard>
          <FacebookButton>
            <FacebookIcon source={require('../../../assets/facebook.png')} />
          </FacebookButton>
          <GoogleSigninButton
            style={{ width: 160, height: 40 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
          />
        </BottomCard>
      </BottomContainer>
    </ContainerView>
  );
};

export default login;
