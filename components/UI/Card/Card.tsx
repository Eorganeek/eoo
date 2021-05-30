import React, { FunctionComponent } from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface ICard {
  onPress?: (e: GestureResponderEvent) => void;
  additionalStyle?: StyleProp<ViewStyle>;
  activeOpacity?: number;
}

const Card: FunctionComponent<ICard> = ({
  children,
  onPress,
  additionalStyle,
  activeOpacity,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, additionalStyle]}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    paddingHorizontal: '2.66%',
    paddingVertical: '2.13%',
  },
});

export default Card;
