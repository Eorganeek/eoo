import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View } from 'react-native';
import { ShopStackNavigationProp } from '../../../constants/navigationTypes';
import { Color, dummyProduct, Routes } from '../../../constants/types';
import Product from '../../../components/Company/Product/Product';
import { Ionicons } from '@expo/vector-icons';
import HeaderButton from '../../../components/UI/HeaderButton/HeaderButton';

export type ICompanyScreen = undefined;

const CompanyScreen = () => {
  const navigation = useNavigation<ShopStackNavigationProp<Routes.Company>>();

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
    <View style={{ flex: 1 }}>
      <Product
        product={dummyProduct}
        onPress={() =>
          navigation.navigate(Routes.ProductDetail, { product: dummyProduct })
        }
      />
      <Product
        product={dummyProduct}
        onPress={() =>
          navigation.navigate(Routes.ProductDetail, { product: dummyProduct })
        }
      />
      <Product
        product={dummyProduct}
        onPress={() =>
          navigation.navigate(Routes.ProductDetail, { product: dummyProduct })
        }
      />
    </View>
  );
};

export default CompanyScreen;
