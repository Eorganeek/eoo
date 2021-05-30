import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import { Color } from '../../constants/types';

const ForgetPassword = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.forgetPass, ...props.style }}>
        <Text style={styles.textColor}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  forgetPass: {
    marginTop: Dimensions.get('window').height / 50,
  },
  textColor: {
    color: Color.primary,
  },
});
