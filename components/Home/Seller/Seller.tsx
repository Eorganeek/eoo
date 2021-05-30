import React, { FunctionComponent } from 'react';
import { StyleSheet, Image } from 'react-native';
import Card from '../../UI/Card/Card';
import Rate from '../../UI/Rate/Rate';
import SellerInfo from './SellerInfo/SellerInfo';
import { TSeller } from '../../../constants/types';

interface ISeller {
  seller: TSeller;
  onPress: () => void;
}

const Seller: FunctionComponent<ISeller> = ({ seller, onPress }) => {
  return (
    <Card onPress={onPress} additionalStyle={styles.container}>
      {/* Add URL later  */}
      <Image source={require('../../../assets/companyicon.png')} />
      <SellerInfo companyName={seller.storeName} minPrice={seller.minPrice} />
      <Rate rateNum={seller.stars} />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

export default Seller;
