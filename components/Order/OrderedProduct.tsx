import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import CustomText from '../Typography/CustomText';
import Row from '../UI/Row/Row';
import TurkishLira from '../UI/TurkishLira/TurkishLira';

interface IOrderedProduct {
  productName: string;
  price: number;
  qty: number;
}

const OrderedProduct: FunctionComponent<IOrderedProduct> = ({
  price,
  productName,
  qty,
}) => {
  return (
    <Row additionalStyle={styles.row}>
      <CustomText weight='regular' size='md-1' variant='medium'>
        {productName}
      </CustomText>
      <CustomText weight='regular' size='sm-2' variant='medium'>
        {qty} X {price} <TurkishLira />
      </CustomText>
    </Row>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default OrderedProduct;
