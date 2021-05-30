import React from 'react';
import { View } from 'react-native';
import { PROFILENAV, Routes } from '../../../constants/types';
import { ShopStackNavigationProp } from '../../../constants/navigationTypes';
import { useNavigation } from '@react-navigation/core';
import Row from '../../../components/UI/Row/Row';
import ProfileCard from '../../../components/Profile/ProfileCard';
import ProfileNav from '../../../components/Profile/ProfileNav';

export type IProfileScreen = undefined;

const ProfileScreen = () => {
  const navigation = useNavigation<ShopStackNavigationProp<Routes.Profile>>();
  return (
    <View style={{ flex: 1 }}>
      <ProfileCard />
      <View>
        {PROFILENAV.map((nav) => (
          <ProfileNav
            key={nav.routeName}
            iconName={nav.iconName}
            routeName={nav.routeName}
            onPress={() => navigation.navigate(nav.routeName)}
          />
        ))}
        <ProfileNav
          iconName='log-out-outline'
          routeName='Çıkış Yap'
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
