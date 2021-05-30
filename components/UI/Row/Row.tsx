import React, { FunctionComponent } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface IRow {
  dir?: 'row' | 'row-reverse';
  isCentered?: boolean;
  additionalStyle?: StyleProp<ViewStyle>;
}

const Row: FunctionComponent<IRow> = ({
  dir = 'row',
  isCentered = true,
  additionalStyle,
  children,
}) => {
  return (
    <View
      style={[
        dir === 'row' ? styles.row : styles.reverse,
        isCentered ? styles.centered : null,
        additionalStyle,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  reverse: {
    flexDirection: 'row-reverse',
  },
  centered: {
    alignItems: 'center',
  },
});

export default Row;
