// import React from 'react';
// import {View, StyleSheet} from 'react-native';
// import {WebView} from 'react-native-webview';

// const WebScreen = ({route}) => {
//   const {url} = route.params;

//   return (
//     <View style={styles.container}>
//       <WebView source={{uri: url}} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default WebScreen;
import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

const Web = ({route}) => {
  const {url} = route.params;

  return (
    <View style={{flex: 1}}>
      <WebView source={{uri: url}} />
    </View>
  );
};

export default Web;
