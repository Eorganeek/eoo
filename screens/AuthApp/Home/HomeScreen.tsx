import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { dummySeller, Routes } from '../../../constants/types';
import { ShopStackNavigationProp } from '../../../constants/navigationTypes';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationOptions } from '@react-navigation/stack';
import Seller from '../../../components/Home/Seller/Seller';

export type IHomeScreen = undefined;

const HomeScreen = () => {
  const navigation = useNavigation<ShopStackNavigationProp<Routes.Home>>();
  return (
    <ScrollView style={styles.container}>
      <Seller
        seller={dummySeller}
        onPress={() => navigation.navigate(Routes.Company)}
      />
      <Seller
        seller={dummySeller}
        onPress={() => navigation.navigate(Routes.Company)}
      />
      <Seller
        seller={dummySeller}
        onPress={() => navigation.navigate(Routes.Company)}
      />
      <Seller
        seller={dummySeller}
        onPress={() => navigation.navigate(Routes.Company)}
      />
      <Seller
        seller={dummySeller}
        onPress={() => navigation.navigate(Routes.Company)}
      />
      <Seller
        seller={dummySeller}
        onPress={() => navigation.navigate(Routes.Company)}
      />
      <Seller
        seller={dummySeller}
        onPress={() => navigation.navigate(Routes.Company)}
      />
    </ScrollView>
  );
};

export const screenOptions: StackNavigationOptions = {
  headerTitle: 'SÜTÇÜN',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
