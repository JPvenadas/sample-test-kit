import React from 'react'
import {ScrollView,View,StyleSheet, Image, Text, Dimensions, TextInput } from "react-native";
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import RegisterForm from '../components/RegisterForm';
import LiveImage from '../components/LiveImage';
import ViewWithLoading from '../components/ViewWithLoading';
import { useState } from 'react';


const TabOneScreen = () => {
  const [load, setload] = useState(true)
  setTimeout(()=>{setload(false)},5000)
  return (
    <ScrollView style={styles.mainContainer}>
      <ViewWithLoading loading={load}>
      <LiveImage/>
      <RegisterForm/>
      </ViewWithLoading>
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
