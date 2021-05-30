import React from 'react';
import { TextInput, StyleSheet, Dimensions } from 'react-native';

const InputText = (props: any) => {
  return (
    <TextInput
      style={{ ...styles.textInput, ...props.style }}
      {...props}
    ></TextInput>
  );
};

export default InputText;

const styles = StyleSheet.create({
  textInput: {},
});
