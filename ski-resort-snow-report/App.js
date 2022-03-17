import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ImageBackground, StyleSheet, TextInput, Image, View, Text, Pressable } from "react-native";

const App = () => {
  const [userName, onChangeUserName] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  return (
  <View style={styles.container}>
    <ImageBackground source={require('./SnowFall.gif')} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>
        Ski Report Snow Report!
      </Text>    
      <View style={styles.login}>
        <Image style={styles.snowflake} source={require('./SnowflakeIcon.png')} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeUserName}
          value={userName}
          placeholder="Username" />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password" />
      </View>
      <View style={styles.buttonContainer}>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#055099' : '#6fbbd3',
          },
          styles.button,
        ]}
        onPress={null}>
        <Text style={styles.buttonText}>Continue as Guest</Text>
      </Pressable>
    </View>    
    </ImageBackground>
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 50,
    fontFamily: "sans-serif-medium",
    transform: [{ rotate: '340 deg'}],
    borderRadius: 15,
    margin: 40,
    top: 50,
    color: "#6a7483",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#fff",
  },
  login: {
    paddingTop: 100,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 15,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default App;

