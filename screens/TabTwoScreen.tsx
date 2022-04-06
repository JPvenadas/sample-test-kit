import React from "react";
import { StyleSheet } from 'react-native';
import { View, Image, Text, Dimensions, TextInput } from "react-native";
import Heading from "../components/Heading";
import LiveImage from "../components/LiveImage";
import Form from "../components/Form";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import Footer from "../components/Footer";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
     <Heading formtype="Login"/>
     <LiveImage/>
     <Form/>
     <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: "center"
  }
});