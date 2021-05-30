import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import Counter from '../Counter/Counter';
import CustomText from '../Typography/CustomText';
import Card from '../UI/Card/Card';
import Row from '../UI/Row/Row';
import TurkishLira from '../UI/TurkishLira/TurkishLira';

interface ICartItem {
  product: any;
  qty: any;
}

const CartItem: FunctionComponent<ICartItem> = ({ product, qty }) => {
  return (
    <Card additionalStyle={styles.mb}>
      <Row additionalStyle={styles.cartElement}>
        <View>
          <CustomText variant='dark' size='lg-1' weight='regular'>
            {product.productName}
          </CustomText>
          <CustomText variant='primary' size='lg-1' weight='regular'>
            <TurkishLira /> {product.price}
          </CustomText>
        </View>
        <Counter
          size={16}
          onIncrement={() => {}}
          onDecrement={() => {}}
          value={qty}
        />
      </Row>
    </Card>
  );
};

const styles = StyleSheet.create({
  cartElement: {
    justifyContent: 'space-between',
  },
  mb: {
    marginBottom: 8,
  },
});

export default CartItem;
