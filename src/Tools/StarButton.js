import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const StarButton = () => {
  const [marked, setMarked] = useState(false);

  const toggleStar = () => {
    const newMarked = !marked;
    setMarked(newMarked);
    showToast(newMarked);
  };

  const showToast = newMarked => {
    const message = newMarked ? 'Added to favorites' : 'Removed from favorites';
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <TouchableOpacity onPress={toggleStar} style={styles.star}>
      <View>
        <Icon
          name={marked ? 'star' : 'staro'}
          size={30}
          color={marked ? 'gold' : 'black'}
        />
      </View>
    </TouchableOpacity>
  );
};

export default StarButton;
const styles = StyleSheet.create({
  star: {
    left: 150,
  },
});
