import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { colors } from '../assests/colors';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* <Image source={require('../../assets/logo.png')} style={styles.logo} /> */}
      <Text style={styles.title}>Time Table App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  logo: {width: 100, height: 100},
  title: {fontSize: 24, fontWeight: 'bold', color: colors.white, marginTop: 20},
});

export default SplashScreen;
