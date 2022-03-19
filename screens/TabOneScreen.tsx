import React from 'react'
import { View,StyleSheet, Image, Text, Dimensions, TextInput } from "react-native";
import Heading from '../components/Heading';
import Signupform from '../components/Signupform';

const TabOneScreen = () => {
  return (
   <View style={styles.container}>
     <Heading formtype='Signup'/>
     <Signupform/>
   </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: "center",
  }
})

export default TabOneScreen
