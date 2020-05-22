import styled from 'styled-components/native';
import Text from '../../widget/text';
import Logo from '../../widget/logo';

const TextView = styled(Text)`
text-align: center;
`;

const LogoView = styled(Logo)`
margin-top: 10%;
margin-left: 5%;
`;

const ContainerView = styled.View`
display: flex;
background-color: #0993f3;
flex: 1;
`;

export { TextView, ContainerView,LogoView };
