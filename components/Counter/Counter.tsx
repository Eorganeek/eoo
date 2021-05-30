import React, { FunctionComponent, useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomText from '../Typography/CustomText';
import Row from '../UI/Row/Row';
import { Color } from '../../constants/types';

interface ICounter {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  size: number;
}

const Counter: FunctionComponent<ICounter> = ({
  value,
  onIncrement,
  onDecrement,
  size,
}) => {
  return (
    <Row>
      <TouchableOpacity
        style={styles.buttons}
        onPress={onDecrement}
        activeOpacity={0.8}
      >
        <Ionicons name='remove' size={size} color={Color.counterText} />
      </TouchableOpacity>
      <CustomText
        weight='bold'
        size='lg-2'
        variant='black'
        additionStyle={styles.count}
      >
        {value}
      </CustomText>
      <TouchableOpacity style={styles.buttons} activeOpacity={0.8}>
        <Ionicons
          name='add'
          size={size}
          color={Color.counterText}
          onPress={onIncrement}
        />
      </TouchableOpacity>
    </Row>
  );
};

const styles = StyleSheet.create({
  buttons: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: Color.light,
    textAlign: 'center',
  },
  count: {
    marginHorizontal: 16,
  },
});
export default Counter;
