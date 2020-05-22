import styled from 'styled-components/native';
import Text from '../../widget/text';

const TextView = styled(Text)`
text-align: center;
`;

const ContainerView = styled.View`
display: flex;
background-color: #0993f3;
flex: 1;
`;

export { TextView, ContainerView };
