import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props: any) => {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}> {props.name} </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  textHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
