import React, {useState} from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';

const CustomAlert = ({width, height, color}) => {
  const showAlert = () => {
    Alert.alert('Custom Alert', 'This is a custom alert!');
  };

  const alertStyle = {
    width: width || 200,
    height: height || 100,
    backgroundColor: color || 'yellow',
    color: 'black',
    textAlign: 'center',
    padding: 10,
  };

  return (
    <View style={styles.container}>
      <Button title="Show Alert" onPress={showAlert} />
      <View style={[styles.alert, alertStyle]}>{/* Alert content */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alert: {
    position: 'absolute',
    zIndex: 1,
  },
});

export default CustomAlert;
