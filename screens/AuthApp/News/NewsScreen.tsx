import React from 'react';
import { ScrollView } from 'react-native';
import { Routes } from '../../../constants/types';
import { ShopStackNavigationProp } from '../../../constants/navigationTypes';
import { useNavigation } from '@react-navigation/core';
import News from '../../../components/News/News';

export type INewsScreen = undefined;

const NewsScreen = () => {
  const navigation = useNavigation<ShopStackNavigationProp<Routes.News>>();
  return (
    <ScrollView style={{ flex: 1 }}>
      <News
        onPress={() => {
          navigation.navigate(Routes.NewsDetail);
        }}
      />
      <News
        onPress={() => {
          navigation.navigate(Routes.NewsDetail);
        }}
      />
      <News
        onPress={() => {
          navigation.navigate(Routes.NewsDetail);
        }}
      />
      {/* <Text>News Screen</Text>
      <Button
        title='News Detail'
        onPress={() => navigation.navigate(Routes.NewsDetail)}
      /> */}
    </ScrollView>
  );
};

export default NewsScreen;
