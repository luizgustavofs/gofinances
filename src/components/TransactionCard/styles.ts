import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';

interface TransactionProps {
  type: 'positive' | 'negative';
}

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 5px;

  padding: 17px 25px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)};
`;

export const Amount = styled.Text<TransactionProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)};
  margin-top: 2px;

  color: ${({theme, type}) => 
  type === 'positive' ? theme.colors.sucess : theme.colors.attention}; 
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 19px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)};
    color: ${({theme}) => theme.colors.text};

`;

export const CategoryName = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(20)};

  margin-left: 17px;
`;

export const Date = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(14)};
`;
