import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ShopStackNavigatorParamsList } from '../constants/navigationTypes';
import { Color, Routes } from '../constants/types';
import CartScreen from '../screens/AuthApp/Cart/CartScreen';
import CompanyScreen from '../screens/AuthApp/Company/CompanyScreen';
import HomeScreen, {
  screenOptions as HomeScreenOptions,
} from '../screens/AuthApp/Home/HomeScreen';
import NewsScreen from '../screens/AuthApp/News/NewsScreen';
import NewsDetailScreen from '../screens/AuthApp/News/NewsDetail/NewsDetailScreen';
import OrdersScreen from '../screens/AuthApp/Orders/OrdersScreen';
import ProductDetailScreen from '../screens/AuthApp/ProductDetail/ProductDetailScreen';
import ProfileScreen from '../screens/AuthApp/Profile/ProfileScreen';
import AddressScreen from '../screens/AuthApp/Address/AddressScreen';

const defaultNavOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: Color.primary,
  },
  headerTintColor: Color.lightText,
  headerTitleStyle: {
    fontWeight: 'normal',
    fontSize: 20,
  },
  headerTitleAlign: 'center',
};

const AuthTab = createBottomTabNavigator();

export const AuthTabNavigator = () => {
  return (
    <AuthTab.Navigator initialRouteName={Routes.Home}>
      <AuthTab.Screen name={Routes.News} component={NewsScreen} />
      <AuthTab.Screen name={Routes.Home} component={HomeScreen} />
      <AuthTab.Screen name={Routes.Profile} component={ProfileScreen} />
    </AuthTab.Navigator>
  );
};

const MainStack = createStackNavigator<ShopStackNavigatorParamsList>();

export const MainStackNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={defaultNavOptions}>
      <MainStack.Screen name={Routes.Home} component={AuthTabNavigator} />
      <MainStack.Screen name={Routes.Company} component={CompanyScreen} />
      <MainStack.Screen
        name={Routes.ProductDetail}
        component={ProductDetailScreen}
      />
      <MainStack.Screen name={Routes.Cart} component={CartScreen} />
      <MainStack.Screen name={Routes.Orders} component={OrdersScreen} />
      <MainStack.Screen name={Routes.Address} component={AddressScreen} />
      <MainStack.Screen name={Routes.NewsDetail} component={NewsDetailScreen} />
    </MainStack.Navigator>
  );
};

// reference : https://stackoverflow.com/questions/51352081/react-navigation-how-to-hide-tabbar-from-inside-stack-navigation
//the other one: https://github.com/react-navigation/react-navigation/issues/7677
