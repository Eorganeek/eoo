import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import OrderItem from '../../../components/Order/OrderItem';
import CustomText from '../../../components/Typography/CustomText';

export type IOrdersScreen = undefined;

const OrdersScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <CustomText
          weight='regular'
          size='md-2'
          variant='medium'
          additionStyle={styles.title}
        >
          Aktif Siparişlerim
        </CustomText>
        <OrderItem />
      </View>
      <View>
        <CustomText
          weight='regular'
          size='md-2'
          variant='medium'
          additionStyle={styles.title}
        >
          Geçmiş Siparişlerim
        </CustomText>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: '2.66%',
    paddingVertical: '2.13%',
  },
});

export default OrdersScreen;
