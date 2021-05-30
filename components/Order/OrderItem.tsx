import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Color } from '../../constants/types';
import CustomText from '../Typography/CustomText';
import Card from '../UI/Card/Card';
import Row from '../UI/Row/Row';
import TurkishLira from '../UI/TurkishLira/TurkishLira';
import OrderedProduct from './OrderedProduct';

const OrderItem = () => {
  return (
    <Card activeOpacity={1} additionalStyle={styles.my}>
      <Row isCentered additionalStyle={styles.spaceBetween}>
        <CustomText size='md-2' weight='regular' variant='dark'>
          Kardeşler Şarküteri
        </CustomText>
        <CustomText size='sm-2' weight='regular' variant='medium'>
          11.11.2021
        </CustomText>
      </Row>
      <CustomText
        size='md-1'
        weight='regular'
        variant='medium'
        additionStyle={styles.my}
      >
        Siparişiniz yarın teslim edilecektir.
      </CustomText>
      <View style={styles.my}>
        <OrderedProduct productName='5 Lt Süt' qty={2} price={30} />
        <OrderedProduct productName='3 Lt Süt' qty={1} price={18} />
        <OrderedProduct productName="30'lu Yumurta" qty={1} price={15} />
      </View>
      <Row isCentered additionalStyle={[styles.spaceBetween, styles.borderTop]}>
        <CustomText variant='primary' weight='regular' size='md-1'>
          Sipariş Tutarı
        </CustomText>
        <CustomText variant='primary' weight='bold' size='md-1'>
          <TurkishLira /> 90.00
        </CustomText>
      </Row>
    </Card>
  );
};

const styles = StyleSheet.create({
  spaceBetween: {
    justifyContent: 'space-between',
  },
  my: {
    marginVertical: 4,
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: Color.primary,
    paddingTop: 5,
  },
});

export default OrderItem;
