import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import ShoppingBag from '../../../../assets/shopping-bag.svg';
import CustomText from '../../../Typography/CustomText';
import Row from '../../../UI/Row/Row';
import TurkishLira from '../../../UI/TurkishLira/TurkishLira';

interface ISellerInfo {
  companyName: string;
  minPrice: string | number;
}

const SellerInfo: FunctionComponent<ISellerInfo> = ({
  companyName,
  minPrice,
}) => {
  return (
    <View style={styles.info}>
      <CustomText
        size='md-2'
        variant='dark'
        weight='regular'
        additionStyle={styles.cname}
      >
        {companyName}
      </CustomText>
      <Row>
        <Row>
          <ShoppingBag style={styles.icon} />
          <CustomText size='sm-2' variant='medium' weight='regular'>
            Yarın Teslimat
          </CustomText>
        </Row>
        <CustomText
          size='sm-2'
          variant='medium'
          weight='regular'
          additionStyle={styles.orderPrice}
        >
          Min. <TurkishLira /> {minPrice}
        </CustomText>
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    flex: 1,
    marginLeft: '6.4%',
  },
  cname: {
    marginBottom: 8,
  },
  orderPrice: {
    marginLeft: '3%',
  },
  icon: {
    marginRight: 4,
  },
});

export default SellerInfo;
