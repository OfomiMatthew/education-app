import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
import logo from '../Assets/Images/login.png'

export default function Login() {
  return (
    <View>
      <Image source={logo} />
      <Text style={styles.welcomeText}>Welcome to CodeWorld</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    welcomeText:{
      fontSize:35,
      textAlign:'center',
      fontWeight:'bold'  
    }
})