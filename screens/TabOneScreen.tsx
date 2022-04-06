import React from 'react'
import {ScrollView,View,StyleSheet, Image, Text, Dimensions, TextInput } from "react-native";
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import RegisterForm from '../components/RegisterForm';
import LiveImage from '../components/LiveImage';

const TabOneScreen = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <LiveImage/>
      <RegisterForm/>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default TabOneScreen
