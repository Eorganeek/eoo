import React from 'react';
import { ScrollView } from 'react-native';
import News from '../../../../components/News/News';

export type INewsScreen = undefined;

const NewsDetailScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <News isDetailed />
    </ScrollView>
  );
};

export default NewsDetailScreen;
