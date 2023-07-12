import React, {useState} from 'react';
import {
  View,
  Modal,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const MyModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [textInputValue, setTextInputValue] = useState('');

  const handleSend = () => {
    // Perform action on sending the data (e.g., make an API call)
    console.log('Title:', title);
    console.log('Text Input:', textInputValue);

    // Close the modal
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>


      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Modal Title</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Text Input"
            value={textInputValue}
            onChangeText={setTextInputValue}
            multiline
          />

          <Button title="Send" onPress={handleSend} />

          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default MyModal;
