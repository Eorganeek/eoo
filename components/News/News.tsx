import React, { FunctionComponent } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CustomText from '../Typography/CustomText';
import CustomButton from '../UI/Button/CustomButton';
import Card from '../UI/Card/Card';

interface INews {
  isDetailed?: boolean;
  onPress?: () => void;
}

const News: FunctionComponent<INews> = ({ isDetailed = false, onPress }) => {
  return (
    <Card
      additionalStyle={[styles.card, styles.mb]}
      activeOpacity={isDetailed ? 1 : 0.6}
      onPress={onPress}
    >
      <Image source={require('../../assets/news.png')} style={styles.mb} />
      <View style={styles.mx}>
        <CustomText
          weight='bold'
          size='md-3'
          variant='primary'
          additionStyle={[styles.alignText, styles.mb]}
        >
          Doğal Ramazan Paketi Çekilişi
        </CustomText>
        <CustomText
          weight='regular'
          size='md-1'
          variant='dark'
          additionStyle={styles.alignText}
        >
          {isDetailed
            ? `Ramazan boyunca doğal ürün tüketmek ister misiniz? Hemen kampanya
            koşullarını oku, yerine getir ve Doğal Ramazan Paketi kazanacak 10
            kişiden biri ol !Ramazan boyunca doğal ürün tüketmek ister misiniz? Hemen kampanya
            koşullarını oku, yerine getir ve Doğal Ramazan Paketi kazanacak 10
            kişiden biri ol !Ramazan boyunca doğal ürün tüketmek ister misiniz? Hemen kampanya
            koşullarını oku, yerine getir ve Doğal Ramazan Paketi kazanacak 10
            kişiden biri ol !Ramazan boyunca doğal ürün tüketmek ister misiniz? Hemen kampanya
            koşullarını oku, yerine getir ve Doğal Ramazan Paketi kazanacak 10
            kişiden biri ol !Ramazan boyunca doğal ürün tüketmek ister misiniz? Hemen kampanya
            koşullarını oku, yerine getir ve Doğal Ramazan Paketi kazanacak 10
            kişiden biri ol !`
            : `Ramazan boyunca doğal ürün tüketmek ister misiniz? Hemen kampanya
          koşullarını oku, yerine getir ve Doğal Ramazan Paketi kazanacak 10
          kişiden biri ol !`}
        </CustomText>
      </View>
      {isDetailed ? (
        <View style={[styles.mx, styles.buttonWrapper]}>
          <CustomButton
            onPress={() => {}}
            variant='secondary'
            title='Kampanyaya Katıl'
            textSize='md-2'
            isCentered
          />
        </View>
      ) : null}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignText: {
    textAlign: 'center',
  },
  mx: {
    marginHorizontal: '10%',
  },
  mb: {
    marginBottom: 8,
  },
  buttonWrapper: {
    width: '80%',
    marginVertical: 20,
  },
});

export default News;
