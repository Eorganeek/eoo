import React, { FunctionComponent } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

interface IHeaderButton {
  onPress: () => void;
}

const HeaderButton: FunctionComponent<IHeaderButton> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.icon}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 18,
  },
});

export default HeaderButton;
