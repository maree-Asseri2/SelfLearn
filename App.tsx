// In App.js in a new project
import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  StyleSheet,
  Share,
  Modal,
  TextInput,
  Button,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderIcons from './src/Tools/Icons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cards from './src/Screens/Cards';
import Accounting from './src/Screens/Accounting';
import SEO from './src/Screens/SEO';
import PL from './src/Screens/PL';
import CustomAlert from './src/Tools/Alert';
import LinearGradient from 'react-native-linear-gradient';
import SettingsPage from './src/Screens/Settings';
import Play from './src/Screens/PlayNow';
import Ad from './src/Screens/Ad';
import WebScreen from './src/Screens/WebScreen';

const Stack = createNativeStackNavigator();

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');

  const handleSend = () => {
    // Perform action on sending the data (e.g., make an API call)

    console.log('Massage:', textInputValue);
    setTextInputValue('');
    // Close the modal
    setModalVisible(false);
    //Alert
    Alert.alert('Done ✅', 'The message has been sent successfully', [
      {
        text: 'OK',
        onPress: () => {
          console.log('OK pressed');
          ToastAndroid.showWithGravity(
            'Thanks',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
          // Place your return statement here or call a function to handle the return logic
        },
      },
    ]);
  };
  return (
    <NavigationContainer>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View>
            <Icon name="chatbubble-ellipses" color="#00D0BD" size={100} />
          </View>
          <LinearGradient colors={['#0CECB9', '#00BBAA']} style={styles.title}>
            <Text style={styles.modalTitle}>How I can Help you ?</Text>
          </LinearGradient>

          <TextInput
            style={styles.textInput}
            value={textInputValue}
            onChangeText={setTextInputValue}
            multiline
          />
          <TouchableOpacity onPress={handleSend} style={styles.b1}>
            <Text style={styles.textb1}>
              Send <Icon name="send" color="#fff" size={15} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.b2}>
            <Text style={styles.textb1}>
              Close <Icon name="close-circle" color="#fff" size={15} />
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Cards}
          options={{
            title: 'All ',
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                onLongPress={() => {
                  ToastAndroid.showWithGravity(
                    'Help and Support',
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP,
                  );
                }}>
                <View style={{paddingRight: 10}}>
                  <Image
                    source={require('./assets/Images/customer-service.png')}
                    style={styles.icon}
                  />
                </View>
              </TouchableOpacity>
            ),
            headerLeft: () => <HeaderIcons />,
            headerTitleStyle: styles.headerTitle,
          }}
        />
        <Stack.Screen name="SEO" component={SEO} />
        <Stack.Screen name="Play" component={Play} />
        <Stack.Screen name="View Course" component={WebScreen} />

        <Stack.Screen
          name="Ad"
          component={Ad}
          options={{
            title: 'Adobe Photoshop',
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsPage}
          options={{
            headerTintColor: 'black',
            headerStyle: {},
          }}
        />
        <Stack.Screen name="PL" component={PL} />

        <Stack.Screen
          name="Accounting"
          component={Accounting}
          options={{
            headerRight: () => (
              <TouchableOpacity>
                <Image
                  source={require('./assets/Images/share.png')}
                  style={styles.back}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  back: {
    width: 25,
    height: 25,
  },
  icon: {
    width: 40,
    height: 40,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'whitesmoke',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
    elevation: 8,
  },
  textInput: {
    backgroundColor: 'white',
    height: 200,
    width: '100%',
    borderColor: '#00cd99',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    top: 10,
    elevation: 5,
  },
  b1: {
    backgroundColor: '#00D0BD',
    width: 100,
    height: 40,
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 8,
    top: 10,
  },
  b2: {
    backgroundColor: '#EC0C2B',
    width: 100,
    height: 40,
    justifyContent: 'center',
    borderRadius: 15,
    top: 20,
    elevation: 8,
  },
  textb1: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    width: '90%',
    borderRadius: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00D3A0',
  },
});
