import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomText from '../Typography/CustomText';
import Card from '../UI/Card/Card';
import Row from '../UI/Row/Row';
import { Color } from '../../constants/types';

interface IProfileNav {
  onPress: () => void;
  routeName: string;
  iconName: 'location-outline' | 'cart-outline' | 'log-out-outline';
}

const ProfileNav: FunctionComponent<IProfileNav> = ({
  onPress,
  routeName,
  iconName,
}) => {
  return (
    <Card onPress={onPress} additionalStyle={styles.comp}>
      <Row isCentered additionalStyle={styles.card}>
        <Row isCentered>
          <Ionicons name={iconName} size={14} style={styles.icon} />
          <CustomText size='md-2' weight='regular' variant='medium'>
            {routeName}
          </CustomText>
        </Row>
        <Ionicons
          name='chevron-forward-outline'
          color={Color.accent}
          size={20}
        />
      </Row>
    </Card>
  );
};

const styles = StyleSheet.create({
  comp: {
    marginBottom: 6,
  },
  card: {
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 5,
    color: Color.accent,
  },
});

export default ProfileNav;
