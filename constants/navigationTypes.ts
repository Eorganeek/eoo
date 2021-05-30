import { Routes } from './types';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { IHomeScreen } from '../screens/AuthApp/Home/HomeScreen';
import { ICompanyScreen } from '../screens/AuthApp/Company/CompanyScreen';
import { IProductDetailScreen } from '../screens/AuthApp/ProductDetail/ProductDetailScreen';
import { IProfileScreen } from '../screens/AuthApp/Profile/ProfileScreen';
import { IAddressScreen } from '../screens/AuthApp/Address/AddressScreen';
import { ICartScreen } from '../screens/AuthApp/Cart/CartScreen';
import { IOrdersScreen } from '../screens/AuthApp/Orders/OrdersScreen';
import { INewsScreen } from '../screens/AuthApp/News/NewsScreen';

export type ShopStackNavigationProp<
  RouteName extends keyof ShopStackNavigatorParamsList = string
> = StackNavigationProp<ShopStackNavigatorParamsList, RouteName>;

export type ShopStackRouteProp<
  RouteName extends keyof ShopStackNavigatorParamsList = string
> = RouteProp<ShopStackNavigatorParamsList, RouteName>;

export interface ShopStackNavigatorParamsList {
  [index: string]: {} | undefined;
  [Routes.Home]: IHomeScreen;
  [Routes.Company]: ICompanyScreen;
  [Routes.ProductDetail]: IProductDetailScreen;
  [Routes.Cart]: ICartScreen;
  [Routes.Orders]: IOrdersScreen;
  [Routes.Profile]: IProfileScreen;
  [Routes.Address]: IAddressScreen;
  [Routes.News]: INewsScreen;
  [Routes.NewsDetail]: INewsScreen;
}
