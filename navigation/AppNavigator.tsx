import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthTabNavigator, MainStackNavigator } from './Navigation';
import LoginScreen from '../screens/UnAuthApp/Login/LoginScreen';
import OtpScreen from '../screens/UnAuthApp/Otp/OtpScreen';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* <AuthTabNavigator /> */}
      <MainStackNavigator />
    </NavigationContainer>
    // <OtpScreen></OtpScreen>
  );
};

export default AppNavigator;
