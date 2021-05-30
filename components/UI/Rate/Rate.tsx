import React, { FunctionComponent } from 'react';
import { Text, StyleSheet } from 'react-native';
import StarSvg from '../../../assets/rate.svg';
import { Color } from '../../../constants/types';
import CustomText from '../../Typography/CustomText';
import Row from '../Row/Row';

interface IRate {
  rateNum: number | string;
}

const Rate: FunctionComponent<IRate> = ({ rateNum }) => {
  return (
    <Row>
      <StarSvg />
      <CustomText
        size='lg-3'
        weight='regular'
        variant='primary'
        additionStyle={styles.rate}
      >
        {rateNum}
      </CustomText>
    </Row>
  );
};

const styles = StyleSheet.create({
  rate: {
    marginLeft: 3,
  },
});

export default Rate;
