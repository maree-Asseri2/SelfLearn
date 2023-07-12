// import React from 'react';
// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   Button,
// } from 'react-native';
// import ShareExample from '../Tools/Share';

// const DATA = [
//   {id: '1', url: 'https://www.google.com'},
//   {id: '2', url: 'https://www.facebook.com'},
//   {id: '3', url: 'https://www.twitter.com'},
//   {id: '4', url: 'https://www.github.com'},
//   {id: '5', url: 'https://www.github.com'},
//   {id: '6', url: 'https://www.github.com'},
//   {id: '7', url: 'https://www.github.com'},
//   {id: '8', url: 'https://www.github.com'},
//   {id: '9', url: 'https://www.github.com'},
//   {id: '10', url: 'https://www.github.com'},
// ];

// const Item = ({url, onPress}) => (
//   <View>
//     <TouchableOpacity onPress={onPress} style={styles.item}>
//       <Text style={styles.title}>{url}</Text>
//     </TouchableOpacity>
//     <TouchableOpacity onPress={() => ShareExample}>
//       <Image
//         source={require('../../assets/Images/share.png')}
//         style={styles.share}
//       />
//     </TouchableOpacity>
//   </View>
// );

// const SEO = () => {
//   const renderItem = ({item}) => (
//     <Item url={item.url} onPress={() => console.log(`Pressed ${item.url}`)} />
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 40,
//   },
//   item: {
//     backgroundColor: '#fff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 20,
//   },
//   share: {
//     width: 30,
//     height: 30,
//     bottom: 60,
//     left: 30,
//   },
// });

// export default SEO;
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Share,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {WebView} from 'react-native-webview';

const DATA = [
  {
    id: '1',
    url: 'https://www.youtube.com/watch?v=JJfjQh1gIn0&pp=ygUPZnVsbCBjb3Vyc2UgU0VP',
    title: 'SEO Full Course 2023 (in one video )',
    type: 'free',
  },
  {
    id: '2',
    url: 'https://www.youtube.com/watch?v=KRAFa_J6c-8&list=PLAOJNfhkbzlW4SVFtg91kYzgTJ0KFI5uN',
    title: ' SEO full course 2023 ( Arabic )',
    type: 'free',
  },
  {
    id: '3',
    url: 'https://www.udemy.com/course/online-seo-training/',
    title:
      'SEO Training: Complete SEO Course & ChatGPT SEO CopywritingSEO Guide 2023',
    type: 'free',
  },
  {id: '4', url: 'https://www.github.com', title: 'Google', type: 'free'},
  {id: '5', url: 'https://www.github.com', title: 'Google', type: 'paid'},
  {id: '6', url: 'https://www.github.com', title: 'Google', type: 'free'},
  {id: '7', url: 'https://www.github.com', title: 'Google', type: 'free'},
  {id: '8', url: 'https://www.github.com', title: 'Google', type: 'free'},
  {id: '9', url: 'https://www.github.com', title: 'Google', type: 'free'},
  {id: '10', url: 'https://www.github.com', title: 'Google', type: 'free'},
];

//Function Share//********************************** */
const ListItem = ({item}) => {
  const onShare = async () => {
    try {
      await Share.share({
        message:
          'تمت مشاركتها من تطبيق التعلم الذاتي\n' +
          '\n عنوان الدورة :' +
          '\n' +
          item.title +
          '\n رابط الدورة ' +
          '\n' +
          item.url,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleItemPress = url => {
    Linking.openURL(url);
  };
  //********************************************* */
  return (
    <View style={styles.List}>
      <LinearGradient colors={['#ffaf5c', '#673ab7']} style={styles.item}>
        <TouchableOpacity onPress={onShare}>
          <Ionicons
            testID="nextButton"
            name="share-social"
            color="#fff"
            size={25}
            style={styles.share}
          />
        </TouchableOpacity>
        <View style={styles.mark}>
          <Text style={styles.free}>{item.type}</Text>
        </View>
        <Pressable onPress={() => handleItemPress(item.url)}>
          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            {/* <Text style={styles.content}>{item.url}</Text> */}
            <View style={styles.star}></View>
          </View>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

const SEO = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <ListItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SEO;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  item: {
    width: '95%',
    backgroundColor: '#D52950',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    right: 10,
  },

  title: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'right',
    left: 15,
  },
  share: {
    width: 25,
    height: 25,
    bottom: 110,
  },
  List: {
    flexDirection: 'row',
  },
  mark: {
    backgroundColor: 'black',
    width: 40,
    borderRadius: 20,
    bottom: 40,
    right: 10,
  },
  free: {
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    flexDirection: 'column',
    padding: 2,
    width: '80%',
  },
  star: {
    flexDirection: 'row',
    left: 140,
  },
});
