import styled from 'styled-components/native';
import Text from '../../widget/text';
import Logo from '../../widget/logo';
import View from '../../widget/view';
import PhoneInput from '../../widget/phoneInput';
import Button from '../../widget/button';
import BottomCard from '../../widget/bottomView';

const TextView = styled(Text)`
font-size: 45px;
`;

const LogoView = styled(Logo)`
justify-content: center;
align-items: center;
margin-top: 2%;
margin-horizontal: 2%;
`;

const ContainerView = styled(View)`
display: flex;
background-color: #0993f3;
flex: 1;
padding: 5px;
`;

const BannerView = styled(View)`
display: flex;
flex-direction: row;
justify-content: center;
padding: 10px;
margin-left: -10%;
`;

const IntroTextView = styled(Text)`
font-size: 30px;
text-align: left;
margin-top: 15%;
margin-left: 12%;
`;

const PromptTextView = styled(IntroTextView)`
font-size: 25px;
margin-top: 5%;
`;

const PhoneContainerView = styled(BannerView)`
padding: 4px;
margin-top: 60px;
width: 100%;
margin-left: 1px;
`;

const InputView = styled(PhoneInput)`
border-top-right-radius: 4px;
border-bottom-right-radius: 4px;
margin-horizontal: 1px;
width: 40%;

`;

const OutlineButton = styled(Button)`
border-radius : 4px;
border-color: white;
border-width: 2px;
align-items: center;
padding: 15px;
margin-left: 10px;
`;

const FacebookButton = styled(OutlineButton)`
border-radius: 3px;
border-color: #0993f3;
width: 156px;
height:34px;
justify-content: center;
margin-right: 8px;
`;

const ButtonText = styled(Text)`
font-size: 18px;
color: white;
text-align: center;
`;

const InputViewContainer = styled(View)`
background-color: white;
border-top-left-radius: 4px;
border-bottom-left-radius: 4px;
width: 15%;
justify-content: center;
align-items: center;
`;

const FacebookIcon = styled(LogoView)`
height: 20px;
width: 20px;
`;

const BottomContainer = styled(View)`
width: 100%;
  flex: 1;
  justifyContent: flex-end;
`;

const BottomTextContainer = styled(View)`

`;

const BottomText = styled(Text)`
margin-bottom: 10px;
font-size: 16px;
`;

export {
    TextView, ContainerView, LogoView, BannerView,
    IntroTextView, PromptTextView, PhoneContainerView,
    InputView, OutlineButton, ButtonText,
    InputViewContainer, BottomCard, FacebookIcon, FacebookButton,
    BottomContainer, BottomTextContainer, BottomText,
};
