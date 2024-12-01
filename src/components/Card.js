import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../assests/colors';

export default Card = ({item}) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <Text style={styles.title}>{item?.CourseTitle}</Text>
      <Text style={styles.subtitle}>{item?.TeacherName}</Text>
      <View style={styles.row}>
        <Icon name="location-outline" size={18} color={colors.black} />
        <Text style={styles.location}>{item?.Location}</Text>
      </View>
      <View style={styles.row}>
        <Icon name="time-outline" size={18} color={colors.black} />
        <Text style={styles.time}>{`${item?.FromTime}-${item?.ToTime}`}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cF2F2F2,
    borderRadius: 15,
    marginVertical: 10,
    padding: 15,
  },
  cardContent: {flexDirection: 'column'},
  title: {fontSize: 18, fontWeight: 'bold', color: colors.black},
  subtitle: {fontSize: 14, color: colors.black, marginVertical: 5},
  row: {flexDirection: 'row', alignItems: 'center', marginTop: 5},
  location: {marginLeft: 5, fontSize: 14, color: colors.black},
  time: {marginLeft: 5, fontSize: 14, color: colors.black},
});
