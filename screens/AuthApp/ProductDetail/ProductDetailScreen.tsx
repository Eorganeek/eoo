import React, { FunctionComponent, useLayoutEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { View, Image, StyleSheet } from 'react-native';
import {
  ShopStackNavigationProp,
  ShopStackRouteProp,
} from '../../../constants/navigationTypes';
import { Color, Routes, TProduct } from '../../../constants/types';
import CustomText from '../../../components/Typography/CustomText';
import Row from '../../../components/UI/Row/Row';
import TurkishLira from '../../../components/UI/TurkishLira/TurkishLira';
import CustomButton from '../../../components/UI/Button/CustomButton';
import Counter from '../../../components/Counter/Counter';
import HeaderButton from '../../../components/UI/HeaderButton/HeaderButton';
import { Ionicons } from '@expo/vector-icons';

export type IProductDetailScreen = {
  product: TProduct;
};

const ProductDetailScreen: FunctionComponent = () => {
  const [count, setCount] = useState(1);
  const navigation =
    useNavigation<ShopStackNavigationProp<Routes.ProductDetail>>();
  const {
    params: { product },
  } = useRoute<ShopStackRouteProp<Routes.ProductDetail>>();

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count === 1) {
      return;
    }
    setCount((prev) => prev - 1);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          onPress={() => {
            navigation.navigate(Routes.Cart);
          }}
        >
          <Ionicons name='cart-outline' size={28} color={Color.lightText} />
        </HeaderButton>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <View style={styles.product}>
        <Image
          style={styles.img}
          source={require('../../../assets/productImgL.png')}
        />
        <View>
          <CustomText
            weight='regular'
            size='lg-1'
            variant='medium'
            additionStyle={styles.textCenter}
          >
            {product.productName}
          </CustomText>
          <CustomText
            weight='regular'
            size='md-2'
            variant='medium'
            additionStyle={[styles.info, styles.textCenter]}
          >
            {product.productDescription}
          </CustomText>
        </View>
        <Counter
          size={24}
          value={count}
          onDecrement={decrement}
          onIncrement={increment}
        />
      </View>
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
          <TurkishLira /> {(count * product.price).toFixed(2)}
        </CustomText>
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
  },
  product: {
    alignItems: 'center',
  },
  img: {
    marginVertical: '9%',
  },
  textCenter: {
    textAlign: 'center',
  },
  info: {
    marginHorizontal: '10%',
    marginTop: '3%',
    marginBottom: '11%',
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

export default ProductDetailScreen;
