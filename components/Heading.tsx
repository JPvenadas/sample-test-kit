import { StyleSheet, View, Text, Button } from "react-native";
import React from 'react'

const Heading = () => {
    
  return (
    <View style={styles.container}>
        <Text>Does'nt have an account yer?</Text>
        <Button 
        title='Sign up'
        color='#917be8'
        onPress={()=>{}}/>
    </View>
  )
}
  const styles = StyleSheet.create({
    
    container: {
        height: '15%',
        width: '100%',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
       paddingHorizontal: 15
    }
  })
export default Heading
