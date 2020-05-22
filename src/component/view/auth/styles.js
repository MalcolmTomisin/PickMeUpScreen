import styled from 'styled-components/native';
import Text from '../../widget/text';
import Logo from '../../widget/logo';
import View from '../../widget/view';

const TextView = styled(Text)`
text-align: center;
justify-content: center;
align-items: center;
font-size: 45px;
color: white;
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
padding: 10px;
`;

const BannerView = styled(View)`
display: flex;
flex-direction: row;
justify-content: center;
padding: 10px;
margin-left: -10%;
`;

const IntroTextView = styled(TextView)`
font-size: 30px;
text-align: left;
margin-top: 15%;
margin-left: 12%;
`;

const PromptTextView = styled(IntroTextView)`
font-size: 25px;
margin-top: 5%;
`;

export {
    TextView, ContainerView, LogoView, BannerView,
    IntroTextView, PromptTextView,
};
