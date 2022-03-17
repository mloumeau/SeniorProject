import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, StyleSheet, TextInput, Image, View, Text, Pressable, Button } from "react-native";
import {useFonts} from "expo-font"

const Stack = createNativeStackNavigator();

const MyStack = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    Shrikhand: require('./assets/fonts/Shrikhand-Regular.ttf'),
  });

  
  const [userName, onChangeUserName] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  return (
    <View style={styles.container}>
    <ImageBackground source={require('./assets/images/snowybackground.jpg')} resizeMode="cover" style={styles.image}>
      <View style={styles.title}>
        <Text style={{ fontFamily: "Shrikhand", fontSize: 40, color: "#6a7483", }}>Ski Resort Snow Report!</Text>
      </View>
      <View style={styles.login}>
        <Image style={styles.snowflake} source={require('./assets/images/SnowflakeIcon.png')} />
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
        onPress={() =>
      navigation.navigate('Profile', { name: 'Jane' })
    }>
        <Text style={styles.buttonText}>Continue as Guest</Text>
      </Pressable>
    </View>    
    </ImageBackground>
  </View>
  );
};


const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 50,
    transform: [{ rotate: '340 deg'}],
    borderRadius: 15,
    padding: 40,
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
    top: 50,
  },
  login: {
    paddingTop: 100,
  },
  snowflake: {
    top: 40
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

export default MyStack;