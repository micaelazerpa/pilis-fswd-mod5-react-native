import React from 'react'
import { Image, SafeAreaView, Text } from 'react-native'
import { styles } from './HomeScreen.styles'

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Viaja y disfruta!
        </Text>
      <Image style={styles.bgImage} source={require('../../../assets/jujuy.jpg')}/>
    </SafeAreaView>
  )
}