import React, { useContext } from 'react'
import MapView, { Marker }  from 'react-native-maps'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './UserInfoScreen.styles'
import { UserContext } from '../../contexts/UserContext'
import { Ionicons } from '@expo/vector-icons';

export const UserInfoScreen = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const handleLogout = () => {
    setCurrentUser(null)
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bienvenida/o !</Text>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require('../../../assets/user.jpg')}
        />
        <Text style={styles.profileName}>{currentUser.username}</Text>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}><Ionicons name="log-out-outline" size={24} color="white" />  Salir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileInfo}>
        <Text style={styles.profileLocation}>Jujuy, Argentina</Text>

        <MapView style={styles.map} 
        initialRegion={{
          latitude:-24.185777,
          longitude: -65.299476,
          latitudeDelta: 3,
          longitudeDelta:3
        }}>
           {<Marker
          coordinate={{
            latitude:-24.185777,
            longitude: -65.299476
          }}
        />}
        </MapView>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          tellus eu nisi tincidunt ultrices. Morbi id dictum ipsum. Nunc nec
          lacus massa. Integer eget elit non elit sodales maximus.
        </Text>
        <Text style={styles.sectionTitle}>Interests</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          tellus eu nisi tincidunt ultrices. Morbi id dictum ipsum. Nunc nec
          lacus massa. Integer eget elit non elit sodales maximus.
        </Text>
      </View>

    </ScrollView>
  )
}