import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
const SettingsPage = () => {
  const [settings, setSettings] = useState([
    {
      name: 'Push Notifications',
      enabled: false,
      icon: 'notifications',
      color: '#FFC100',
    },
    {
      name: 'Email Notifications',
      enabled: false,
      icon: 'ios-mail-unread',
      color: '#D60037',
    },
    {
      name: 'Add Cards',
      enabled: false,
      icon: 'ios-add-circle',
      color: '#009B62',
    },
    {
      name: 'Dark Mode',
      enabled: false,
      icon: 'moon',
      color: 'black',
    },
    {
      name: 'Youtube Channel ',
      enabled: false,
      icon: 'logo-youtube',
      color: 'red',
    },
    {
      name: 'Facebook Page ',
      enabled: false,
      icon: 'logo-facebook',
      color: '#0074DA',

    },
    {
      name: 'Rate Us ',
      enabled: false,
      icon: 'star',
      color: '#FFC100',
    },
  ]);

  const toggleSwitch = index => {
    const updatedSettings = [...settings];
    updatedSettings[index].enabled = !updatedSettings[index].enabled;
    setSettings(updatedSettings);
  };

  return (
    <LinearGradient colors={['#00D3A0', '#5ab3f0']} style={styles.container}>
      <View>
        {settings.map((setting, index) => (
          <View key={index} style={styles.settingContainer}>
            <View style={styles.icon}>
              <Text style={styles.settingName}>{setting.name}</Text>
              <Icon name={setting.icon} color={setting.color} size={30} />
            </View>
            <Switch
              value={setting.enabled}
              onValueChange={() => toggleSwitch(index)}
              trackColor={{false: 'black', true: 'white'}} // Change the track colors
              thumbColor={settings.enabled ? '#f5dd4b' : '#f4f3f4'} // Change the thumb color
            />
          </View>
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingName: {
    fontSize: 18,
    color: 'white',
    padding: 10,
    right: 10,
    fontWeight: 'bold',
  },
  icon: {
    flexDirection: 'row-reverse',
  },
});

export default SettingsPage;
