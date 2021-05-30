import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import InputText from '../../../components/LoginPageComponents/InputText';
import MainButton from '../../../components/LoginPageComponents/MainButton';
import { Color } from '../../../constants/types';

const OtpScreen = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Color.primary}
          barStyle='light-content'
        ></StatusBar>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Once Telefonunu Onayliyalim</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textBody}>Telefon numaranizi giriniz</Text>
          <View style={styles.textInputView}>
            <InputText
              style={styles.inputCountryCode}
              placeholder={'+90'}
              editable={false}
            ></InputText>
            <InputText
              style={styles.inputNumber}
              placeholder={'555 555 5555'}
              keyboardType='numeric'
              maxLength={10}
            ></InputText>
          </View>
          <MainButton title='Ileri' style={styles.buttonStyle}></MainButton>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    alignItems: 'center',
  },
  header: {
    marginVertical: Dimensions.get('window').height / 7,
  },
  textHeader: {
    color: Color.lightText,
    fontSize: Dimensions.get('window').width / 18,
  },
  card: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height / 3.2,
    width: '90%',
    borderRadius: Dimensions.get('window').width / 11,
  },
  textBody: {
    padding: '10%',
    fontSize: Dimensions.get('window').width / 25,
    color: Color.mediumText,
  },
  textInputView: {
    flexDirection: 'row',
    paddingLeft: '10%',
  },
  buttonStyle: {
    paddingHorizontal: '10%',
    marginTop: Dimensions.get('window').height / 20,
  },
  inputNumber: {
    borderBottomColor: '#f2f2f2',
    fontSize: Dimensions.get('window').height / 34,
    borderBottomWidth: 1,
  },
  inputCountryCode: {
    fontSize: Dimensions.get('window').height / 34,
    paddingRight: '8%',
  },
});
