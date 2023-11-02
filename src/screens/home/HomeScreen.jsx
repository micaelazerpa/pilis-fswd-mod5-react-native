import React from 'react'
import { Image, SafeAreaView, Text, View, ImageBackground } from 'react-native'
import { styles } from './HomeScreen.styles'

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('../../../assets/home.jpg')}>
        <Text style={styles.title}>
          Recetas Regionales de Jujuy!
        </Text>
      </ImageBackground>
      {/* <Image style={styles.bgImage} source={{uri : "https://media.tenor.com/K1zVlgTXVpYAAAAC/mi-pan-mi-pan-su-su-su.gif"}}/> */}
    </SafeAreaView>
  )
}