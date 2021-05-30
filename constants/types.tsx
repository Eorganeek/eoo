import { Ionicons } from '@expo/vector-icons';

export enum Routes {
  Home = 'SÜTÇÜN',
  Company = 'Şirket Adı',
  ProductDetail = 'Ürün Detay',
  Cart = 'Sepet',
  Profile = 'Profil',
  Orders = 'Siparişlerim',
  Address = 'Adreslerim',
  News = 'Duyurular',
  NewsDetail = 'Duyuru Detay',
  Login = 'Giriş Yap',
}

export const Color = {
  primary: '#0174BB',
  accent: '#FD8700',
  star: '#F7D008',
  danger: '#B10101',
  light: '#B0EAFD',
  validated: '#2E9054',
  lightText: '#fff',
  mediumText: '#707070',
  darkText: '#3E3E3E',
  black: '#000',
  counterText: '#48B6DA',
};

export type TProfileNav = {
  routeName: string;
  iconName: 'location-outline' | 'cart-outline';
};

export const PROFILENAV: TProfileNav[] = [
  {
    routeName: Routes.Address,
    iconName: 'location-outline',
  },
  {
    routeName: Routes.Orders,
    iconName: 'cart-outline',
  },
];

/* 
  Fix later any's
*/
export type TSeller = {
  user: any;
  storeName: string;
  openingHours: string;
  closingHours: string;
  minPrice: number;
  imageUrl: string;
  iban: string;
  stars: number;
  products: any;
  createdAt: string;
  createdBy: any;
};

export type TProduct = {
  seller: any;
  productName: string;
  price: number;
  productImageUrl: string;
  productDescription: string;
  createdAt: string;
  createdBy: any;
};

export const dummySeller: TSeller = {
  user: 1,
  storeName: 'Kardeşler Şarküteri',
  openingHours: '',
  closingHours: '',
  minPrice: 30.0,
  imageUrl: '',
  iban: '',
  stars: 4.6,
  products: '',
  createdAt: '2020-10-15',
  createdBy: 1,
};

export const dummyProduct: TProduct = {
  seller: 1,
  productName: '5 Lt Süt',
  price: 30.0,
  productImageUrl: '',
  productDescription:
    'Çatalca Arıca çiftlikten Simentai cinsi inekten sağılmış günlük taze süt.',
  createdAt: '2020-10-15',
  createdBy: 1,
};
