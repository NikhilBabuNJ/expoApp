import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Button, ScrollView,
  Switch, Modal, Alert, TouchableHighlight, TextInput, ImageBackground, ActivityIndicator
} from 'react-native';

export default function App() {
  const image = { uri: "https://reactjs.org/logo-og.png" };
  const [modalVisible, setModalVisible] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
    // <View style={styles.container}>
    //   <ActivityIndicator size="large" color="#0000ff" />
    //   {/* <ImageBackground source={image} style={styles.image}>
    //   <Text style={styles.text}>Inside</Text>
    // </ImageBackground> */}

    //   <View style={styles.container1}>
    //     <Text>1</Text>
    //   </View>
    //   <View style={styles.container2}>
    //     <Text>2</Text>
    //   </View>
    //   <View style={styles.container3}>
    //     <Text>3</Text>
    //   </View>

    // </View>


    <View style={styles.centeredView}>
      
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      autoCapitalize={"characters"} editable={false}
      value={value}
    />

      {Alert.alert("Modal has been closed.")}
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#41a6d9'
  },
  container1: {
    backgroundColor: 'red',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-between',
    height: '100px',
    width: '100px'

  },
  container2: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px'
  },
  container3: {
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px'
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  },
  image: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    justifyContent: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
