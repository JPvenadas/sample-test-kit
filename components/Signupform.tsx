import React from 'react'
import { View,StyleSheet, Alert, Image, Button, Text, Dimensions, TextInput } from "react-native";

const Signupform = () => {
    const [username, changeun] = React.useState('')
    const [password, changepw] = React.useState('')
    const [confirm, changecpw] = React.useState('')
  return (
    <View style={styles.maincontainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Create an account</Text>
          <TextInput onChangeText={(val) =>changeun(val)} style={styles.input} placeholder='Username'/>
          <TextInput onChangeText={(val) =>changepw(val)} secureTextEntry={true} style={styles.input} placeholder='Password'/>
          <TextInput onChangeText={(val) =>changecpw(val)} secureTextEntry={true} style={styles.inputlast} placeholder='Confirm Password'/>
          <Button color='#917be8' title='Signup' onPress={()=>{
              if(password === '' || username === '' || confirm === ''){
                  Alert.alert('Signing Error','All fields are required')
                  return
              }
              if(password !== confirm){
                  Alert.alert('Signing Error','Password does not match')
                  return
              }
              Alert.alert('Successful','Welcome')
          }}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    maincontainer:{
        width: 350,
        height: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#917be8'
    },
    container:{
        width: 300,
       
    },
    title:{
        fontSize:25,
        marginBottom: 50,
        color: '#917be8',
        borderBottomColor:  '#917be8',
        borderBottomWidth: 3,
        padding: 10
    },
    input:{
        fontSize: 17,
        width: '100%',
        borderBottomWidth: 1,
        borderRadius: 10,
        padding: 8,
        marginBottom: 20,
        borderColor: 'gray'
    },
    inputlast:{
        fontSize: 17,
        width: '100%',
        borderBottomWidth: 1,
        borderRadius: 10,
        padding: 8,
        marginBottom: 70,
        borderColor: 'gray'
    }
    
})
export default Signupform
