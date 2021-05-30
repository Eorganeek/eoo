import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomText from '../Typography/CustomText';
import Card from '../UI/Card/Card';
import Row from '../UI/Row/Row';
import { Color } from '../../constants/types';

const ProfileCard = () => {
  return (
    <Card activeOpacity={1} additionalStyle={styles.card}>
      <Row isCentered>
        <Ionicons name='person-circle-outline' style={styles.person} />
        <View style={styles.profileInfo}>
          <CustomText
            variant='black'
            weight='bold'
            size='md-1'
            additionStyle={styles.mb}
          >
            Mehmet Öksüz
          </CustomText>
          <Row isCentered>
            <Ionicons name='mail-outline' style={styles.mail} />
            <CustomText variant='dark' weight='regular' size='sm-2'>
              mehmet@eorganeek.com
            </CustomText>
          </Row>
        </View>
        <Ionicons name='create-outline' style={styles.edit} />
      </Row>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 16,
  },
  person: {
    marginRight: '4.55%',
    fontSize: 48,
    color: Color.primary,
  },
  mail: {
    fontSize: 14,
    color: Color.accent,
    marginRight: '2.5%',
  },
  edit: {
    fontSize: 24,
    color: Color.accent,
  },
  mb: {
    marginBottom: 8,
  },
  profileInfo: {
    flex: 1,
  },
});

export default ProfileCard;
