import React, { FunctionComponent } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { Color } from '../../constants/types';

interface ICustomText {
  size: 'sm-1' | 'sm-2' | 'md-1' | 'md-2' | 'md-3' | 'lg-1' | 'lg-2' | 'lg-3';
  weight: 'regular' | 'bold';
  variant: 'primary' | 'light' | 'medium' | 'dark' | 'black';
  additionStyle?: StyleProp<TextStyle>;
}

const CustomText: FunctionComponent<ICustomText> = ({
  children,
  size,
  weight,
  variant,
  additionStyle,
}) => {
  return (
    <Text
      style={[styles[size], styles[weight], styles[variant], additionStyle]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  'sm-1': {
    fontSize: 9,
  },
  'sm-2': {
    fontSize: 10,
  },
  'md-1': {
    fontSize: 12,
  },
  'md-2': {
    fontSize: 14,
  },
  'md-3': {
    fontSize: 16,
  },
  'lg-1': {
    fontSize: 20,
  },
  'lg-2': {
    fontSize: 22,
  },
  'lg-3': {
    fontSize: 24,
  },
  regular: {
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
  primary: {
    color: Color.primary,
  },
  light: {
    color: Color.lightText,
  },
  medium: {
    color: Color.mediumText,
  },
  dark: {
    color: Color.darkText,
  },
  black: {
    color: Color.black,
  },
});

export default CustomText;
