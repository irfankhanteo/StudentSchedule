import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../assests/colors';

export default PrimaryButton = ({
    title='title',
    loading=false,
    onPress=()=>{},
}) => {
  return (
    <TouchableOpacity
      
      style={[styles.button, loading && {backgroundColor: '#ddd'}]}
      onPress={onPress}
      disabled={loading}>
      <Text style={styles.buttonText}>
        {loading ? 'Loading...' : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});