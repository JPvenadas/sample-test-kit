import React from 'react'
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native'



const correctun = 'Hello'
const correctpass = 'World'

const Form = () => {
  const [username, changeun] = React.useState("")
 const [password, changepass] = React.useState("")
  return (
    <View>
        <TextInput onChangeText={(val) =>changeun(val)} placeholder='Username' style={styles.input}/>
        <TextInput secureTextEntry={true} onChangeText={(val) =>changepass(val)} placeholder='Password' style={styles.input}/>
        <Button 
        title='Log in'
        color='#917be8'
        onPress={()=>{
          correctpass === password && correctun === username?
          Alert.alert('Successfully logged in','Welcome'):
          Alert.alert('Login error','wrong username and password')
        }}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        padding: 8,       
        width: 300,
        marginBottom: 20,
        borderRadius: 10
    },
})

export default Form
