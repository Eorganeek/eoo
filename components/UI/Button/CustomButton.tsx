import React, { FunctionComponent } from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Color } from '../../../constants/types';
import CustomText from '../../Typography/CustomText';

interface IButton {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
  variant?: 'primary' | 'secondary';
  isFull?: boolean;
  textSize: 'lg-3' | 'lg-2' | 'lg-1' | 'md-2' | 'md-3';
  isCentered?: boolean;
}

const CustomButton: FunctionComponent<IButton> = ({
  onPress,
  variant = 'primary',
  title,
  isFull = true,
  textSize,
  isCentered,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant], isFull ? styles.full : null]}
      onPress={onPress}
    >
      <CustomText
        variant='light'
        weight='regular'
        size={textSize}
        additionStyle={isCentered ? styles.isCentered : null}
      >
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 15,
  },
  full: {
    flex: 1,
  },
  primary: {
    backgroundColor: Color.primary,
  },
  secondary: {
    backgroundColor: Color.accent,
  },
  isCentered: {
    textAlign: 'center',
  },
});

export default CustomButton;
