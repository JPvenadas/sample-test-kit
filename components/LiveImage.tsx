import React from 'react'
import { StyleSheet, View  } from 'react-native'
import LottieView from 'lottie-react-native';

const LiveImage = () => {
  return (
   <View style={styles.container}>
       <LottieView source={
          require('../assets/lottie/38435-register.json')}
        autoPlay={true}
        loop={true}
        style={styles.image}/>
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 250
    },
    image: {
       width: '100%',
       height: 200,
      },
})

export default LiveImage
