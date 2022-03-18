import React from 'react'
import { StyleSheet, View  } from 'react-native'
import LottieView from 'lottie-react-native';

const LiveImage = () => {
  return (
   <View style={styles.container}>
       <LottieView source={
          require('../assets/lottie/70640-floating-magic-link-login.json')}
        autoPlay={true}
        loop={true}
        style={styles.image}/>
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
       height: 350,
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center'
    },
    image: {
        width: '100%',
        height:250,
      },
})

export default LiveImage
