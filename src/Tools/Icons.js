import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const HeaderIcons = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => console.log('Icon 1 pressed')}
        style={styles.icon1}>
        <Icon name="notifications" color="#00D3A0" size={35} />
        <View style={styles.noti}>
          <Text style={styles.num}>3</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Play')}>
        <Icon name="game-controller" color="#00D3A0" size={35} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Image
          source={require('../../assets/Images/settings.png')}
          style={styles.icon3}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderIcons;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  icon1: {
    right: 140,
    flexDirection: 'row',
  },
  icon3: {
    width: 35,
    height: 35,
    left: 15,
  },
  noti: {
    backgroundColor: 'red',
    borderRadius: 50,
    width: 18,
    right: 35,
    height: 18,
  },
  num: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
  },
});
