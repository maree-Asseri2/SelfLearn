import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Share,
  Clipboard,
  ToastAndroid,
  Linking,
} from 'react-native';
import {WebView} from 'react-native-webview';
import StarButton from '../Tools/StarButton';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const LinkCard = ({title, url}) => {
  const navigation = useNavigation();

  const handleCopy = () => {
    Clipboard.setString(url);
    // Optionally, you can show a toast or feedback to indicate the link has been copied.
    ToastAndroid.show('Link copied!', ToastAndroid.SHORT);
  };
  const handleShare = async () => {
    try {
      await Share.share({
        message:
          'تمت مشاركتها من تطبيق التعلم الذاتي\n' +
          '\n عنوان الدورة :' +
          '\n' +
          title +
          '\n رابط الدورة ' +
          '\n' +
          url,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  const openWebView = url => {
    navigation.navigate('View Course', {url});
  };
  return (
    <View style={styles.linkCard}>
      <Text style={styles.linkTitle}>{title}</Text>
      <Text style={styles.linkUrl}>{url}</Text>
      <View style={styles.Icon}>
        <TouchableOpacity
          onPress={() =>
            openWebView('https://helpx.adobe.com/photoshop/user-guide.html')
          }>
          <Icon
            name="ios-open-outline"
            size={25}
            color="#000000"
            style={styles.A}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare}>
          <Icon
            name="share-social-outline"
            size={25}
            color="#000000"
            style={styles.B}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCopy}>
          <Icon
            name="copy-outline"
            size={25}
            color="#000000"
            style={styles.C}
          />
        </TouchableOpacity>
        <StarButton />
      </View>
    </View>
  );
};

const Ad = () => {
  const urlLinks = [
    {
      title: 'Photoshop User Guide',
      des: 'The comprehensive guide to using Photoshop',
      url: 'https://helpx.adobe.com/photoshop/user-guide.html',
      id: 1,
    },
    {
      title: 'Link 2',
      des: 'Photoshop User Guide',
      url: 'https://example.com/link2',
      id: 2,
    },
    {title: 'Link 3', des: '', url: 'https://example.com/link3', id: 3},
    {title: 'Link 3', des: '', url: 'https://example.com/link3', id: 4},
    {title: 'Link 3', des: '', url: 'https://example.com/link3', id: 5},
  ];

  const videoLinks = [
    {title: 'Link 1', des: '', url: 'https://example.com/link1'},
    {title: 'Link 2', des: '', url: 'https://example.com/link2'},
    {title: 'Link 3', des: '', url: 'https://example.com/link3'},
  ];

  const websiteLinks = [
    {title: 'Link 1', des: '', url: 'https://example.com/link1'},
    {title: 'Link 2', des: '', url: 'https://example.com/link2'},
    {title: 'Link 3', des: '', url: 'https://example.com/link3'},
  ];

  return (
    <LinearGradient colors={['#5b247a', '#1bcedf']} style={styles.linkCard}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.section}>
            <Icon name="document-text-outline" size={35} color="#FFFFFF" />

            <Text style={styles.sectionTitle}>Documentations Links</Text>

            {urlLinks.map((link, index) => (
              <LinkCard key={index} title={link.title} url={link.des} />
            ))}
          </View>

          <View style={styles.section}>
            <Icon name="md-videocam-outline" size={35} color="#FFFFFF" />

            <Text style={styles.sectionTitle}>Video Links</Text>
            {videoLinks.map((link, index) => (
              <LinkCard key={index} title={link.title} url={link.url} />
            ))}
          </View>

          <View style={styles.section}>
            <Icon name="bookmarks-outline" size={35} color="#FFFFFF" />
            <Text style={styles.sectionTitle}>Book Links</Text>
            {websiteLinks.map((link, index) => (
              <LinkCard key={index} title={link.title} url={link.url} />
            ))}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 2,
    color: 'white',
  },
  linkCard: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 12,
    elevation: 3,
  },
  Icon: {
    flexDirection: 'row-reverse',
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  linkUrl: {
    fontSize: 15,
    color: '#0066cc',
    fontFamily: 'Morga-Regular',
  },
  A: {},
  C: {
    right: 100,
  },
  B: {
    right: 50,
  },
});

export default Ad;
