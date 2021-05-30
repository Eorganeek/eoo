import { useNavigation } from '@react-navigation/core';
import React, { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderButton from '../../../components/UI/HeaderButton/HeaderButton';
import { ShopStackNavigationProp } from '../../../constants/navigationTypes';
import { Color, Routes } from '../../../constants/types';
import { Ionicons } from '@expo/vector-icons';
import CartItem from '../../../components/Cart/CartItem';
import Row from '../../../components/UI/Row/Row';
import CustomButton from '../../../components/UI/Button/CustomButton';
import CustomText from '../../../components/Typography/CustomText';
import TurkishLira from '../../../components/UI/TurkishLira/TurkishLira';
import { ScrollView } from 'react-native-gesture-handler';

export type ICartScreen = undefined;

const itemlist:any = [{productName:"Koto",price:464,qty:32}]
const CartScreen = () => {
  const navigation = useNavigation<ShopStackNavigationProp<Routes.Cart>>();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton onPress={() => {}}>
          <Ionicons name='trash-outline' size={28} color={Color.lightText} />
        </HeaderButton>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <ScrollView>
        <CartItem product={{ productName: '5 Lt Süt', price: 7.99 }} qty={1} />
        <CartItem product={{ productName: '5 Lt Süt', price: 7.99 }} qty={2} />
        <CartItem product={{ productName: '5 Lt Süt', price: 7.99 }} qty={3} />
        <CartItem product={{ productName: '5 Lt Süt', price: 7.99 }} qty={4} />
        <CartItem product={{ productName: '5 Lt Süt', price: 7.99 }} qty={5} />
        <CartItem product={{ productName: '5 Lt Süt', price: 7.99 }} qty={6} />
      </ScrollView>
      <Row additionalStyle={styles.row}>
        <CustomButton
          title='Sepete Ekle'
          variant='primary'
          textSize='lg-3'
          onPress={() => {}}
        />
        <CustomText
          weight='regular'
          size='lg-3'
          variant='primary'
          additionStyle={styles.ml}
        >
          <TurkishLira /> {(1 * 30).toFixed(2)}
        </CustomText>
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  row: {
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: '4.2%',
    paddingVertical: '5.6%',
  },
  ml: {
    marginLeft: '10%',
  },
});

export default CartScreen;
