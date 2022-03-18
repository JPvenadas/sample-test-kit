import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Footer = () => {
  return (
   <View style={styles.container}>
       <Text style={styles.text}>Forgot Password?</Text>
   </View>
  )
}
const styles = StyleSheet.create({
    container:{
        height: 100
    },
    text:{
        marginTop: 'auto',
        textAlign: 'center',
        color: '#917be8',
    }
})
export default Footer
