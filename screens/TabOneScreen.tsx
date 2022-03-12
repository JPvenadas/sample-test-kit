import React from "react";
import { StyleSheet } from 'react-native';
import { View, Image, Text, Dimensions } from "react-native";
import LottieView from 'lottie-react-native';
import { withSafeAreaInsets } from "react-native-safe-area-context";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.Navbar}>
        <Text>Doesn't have an account yet?</Text>
        <View style={styles.signUp}>
          <Text style={{color: 'white'}}>Sign-up</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/login.png')}>
        </Image>
      </View>
      <View style={styles.input}>
          <Text style={styles.placeHolder}>Username</Text>
      </View>
      <View style={styles.input}>
          <Text style={styles.placeHolder}>Password</Text>
      </View>
      <View style={styles.login}>
          <Text style={styles.loginText}>Login</Text>
      </View>
      <Text style={styles.forgot}>Forgot Password?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center"
  },
  Navbar: {
    padding: 10,
    position: "absolute",
    top: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    width: '100%',
    flexDirection: 'row'
  },
  signUp: {
    backgroundColor: "rgb(50, 95, 237)",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: 100,
    height: 35,
    color: 'white',
    borderRadius: 8
  },
  imageContainer: {
    marginTop: 40,
    width: '100%',
    height:300
  },
  image: {
    marginTop: 50,
    width: '100%',
    height:200
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: "rgb(50, 95, 237)",
    padding: 12,
    borderRadius: 8,
    margin: 5
  },
  placeHolder: {
    color: 'gray',
    fontSize: 17,
  },
  login: {
    backgroundColor: "rgb(50, 95, 237)",
    width: '80%',
    padding: 15,
    borderRadius: 8,
    margin: 5
  },
  loginText: {
    color: 'white',
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold"
  },
  forgot: {
    color: "rgb(50, 95, 237)",
    marginTop: 20
  }
});