import { StyleSheet, View, Text, Button } from "react-native";
import React from 'react'

interface props{
  formtype: 'Login' | 'Signup'
}

const Heading = ({formtype}: props) => {
    
  return (
    <View style={styles.container}>
        <Text>{formtype === 'Login'? "Doesn't have an account yet?": 'Already have an account?'} </Text>
        <Button 
        title={formtype === 'Login'? "Signup": 'Login'}
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
