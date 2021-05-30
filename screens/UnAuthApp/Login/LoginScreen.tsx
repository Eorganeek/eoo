import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LoginText from '../../../components/LoginPageComponents/LoginText';
import { Color } from '../../../constants/types';
import MainButton from '../../../components/LoginPageComponents/MainButton';

const LoginScreen = () => {
  const [data, setData] = useState({
    phone: '',
    password: '',
    checkPhoneInputChange: false,
    secureTextEntry: true,
  });
  //phone girilirse icon aktif oluyor
  const phoneInputChange = (val: string) => {
    if (val.length >= 10) {
      setData({
        ...data,
        phone: val,
        checkPhoneInputChange: true,
      });
    } else {
      setData({
        ...data,
        phone: val,
        checkPhoneInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val: string) => {
    setData({
      ...data,
      password: val,
    });
  };
  //password iconu degistirmek icin
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Color.primary}
          barStyle={'light-content'}
        ></StatusBar>
        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={styles.imageStyle}
        />
        <View style={styles.footer}>
          <Text style={styles.textFooter}>Telefon</Text>
          <View style={styles.action}>
            <Ionicons name={'call-outline'} size={24}></Ionicons>
            <TextInput
              style={styles.textInput}
              placeholder='555 555 5555'
              keyboardType='numeric'
              maxLength={10}
              onChangeText={(val) => phoneInputChange(val)}
            ></TextInput>
            {data.checkPhoneInputChange ? (
              <Ionicons
                name={'checkmark-circle-outline'}
                size={24}
                color={'green'}
              ></Ionicons>
            ) : null}
          </View>

          <Text style={[styles.textFooter, { marginTop: 30 }]}>Sifre</Text>
          <View style={styles.action}>
            <Ionicons name={'lock-closed'} size={24}></Ionicons>
            <TextInput
              style={styles.textInput}
              placeholder='sifre'
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={(val) => handlePasswordChange(val)}
            ></TextInput>

            {
              //password alanindaki icon'a tiklanmasina gore yazi gorunur ve gorunmez oluyor
            }
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Ionicons
                  name={'eye-off-outline'}
                  size={24}
                  color={'black'}
                ></Ionicons>
              ) : (
                <Ionicons
                  name={'eye-outline'}
                  size={24}
                  color={'black'}
                ></Ionicons>
              )}
            </TouchableOpacity>
          </View>

          <LoginText
            style={styles.forgetPasswordStyle}
            title='Sifremi Unuttum?'
          ></LoginText>
          <MainButton style={styles.buttonStyle} title='Giris Yap'></MainButton>

          <View style={styles.bottomPart}>
            <LoginText title='Satici misin?Basvuru Yap'></LoginText>
            <LoginText title='Kayit Ol'></LoginText>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: Color.primary,
  },
  imageStyle: {
    flex: 1.5,
    width: Dimensions.get('window').width / 1,
    height: Dimensions.get('window').height / 3,
  },
  footer: {
    flex: 2.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: Dimensions.get('window').width / 11,
    borderTopRightRadius: Dimensions.get('window').width / 11,
    paddingHorizontal: '6%',
    paddingVertical: '7%',
  },
  textFooter: {
    color: '#05375a',
    fontSize: Dimensions.get('window').height / 45,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    fontSize: Dimensions.get('window').height / 50,
  },
  buttonStyle: {
    marginTop: Dimensions.get('window').height / 50,
  },
  forgetPasswordStyle: {
    alignItems: 'flex-end',
  },
  bottomPart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
