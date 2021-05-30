import React, { FunctionComponent } from 'react';
import { Image, StyleSheet } from 'react-native';
import { TProduct } from '../../../constants/types';
import Card from '../../UI/Card/Card';
import ProductInfo from './ProductInfo/ProductInfo';

interface IProduct {
  product: TProduct;
  onPress: () => void;
}

const Product: FunctionComponent<IProduct> = ({ product, onPress }) => {
  return (
    <Card additionalStyle={styles.component} onPress={onPress}>
      <ProductInfo
        name={product.productName}
        desc={product.productDescription}
        price={product.price}
      />
      <Image source={require('../../../assets/productImg.png')} />
    </Card>
  );
};

const styles = StyleSheet.create({
  component: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

export default Product;
