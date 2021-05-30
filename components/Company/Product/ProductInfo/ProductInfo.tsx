import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '../../../Typography/CustomText';
import TurkishLira from '../../../UI/TurkishLira/TurkishLira';

interface IProductInfo {
  name: string;
  desc: string;
  price: number;
}

const ProductInfo: FunctionComponent<IProductInfo> = ({
  name,
  desc,
  price,
}) => {
  return (
    <View style={styles.info}>
      <CustomText
        variant='dark'
        weight='regular'
        size='md-2'
        additionStyle={styles.mBottom}
      >
        {name}
      </CustomText>
      <CustomText
        variant='medium'
        weight='regular'
        size='sm-1'
        additionStyle={styles.mBottom}
      >
        {desc}
      </CustomText>
      <CustomText variant='primary' weight='bold' size='sm-2'>
        <TurkishLira /> {price}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    flexBasis: '68%',
  },
  mBottom: {
    marginBottom: 6,
  },
});

export default ProductInfo;
