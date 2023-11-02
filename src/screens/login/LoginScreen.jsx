import React, { useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, ToastAndroid } from 'react-native'
import { styles } from './LoginScreen.styles'
import { useForm, Controller } from 'react-hook-form'
import { getUsers } from '../../api/user.service'
import { UserContext } from '../../contexts/UserContext'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

export const LoginScreen = () => {
    const navigation = useNavigation()
    const { setCurrentUser } = useContext(UserContext)
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const handleLogin = ({ username, password }) => {
        console.log('se presionó el botón')
        getUsers()
            .then(users => {
                const user = users[0]
                if (username === user.username && password === user.password) {
                    setCurrentUser({ username, password })
                    console.log('se registró')
                    navigation.navigate('Profile')
                } else {
                    ToastAndroid.show('usuario o contraseña incorrecto', ToastAndroid.LONG, ToastAndroid.TOP);
                    console.log('NO se registró')
                }
            })
            .catch(err => console.warn(err))
    }

    return (
        <ScrollView style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={require('../../../assets/login.jpg')}
                />
                <Text style={styles.title}> Inicio de Sesión </Text>

            </View>
            <View style={styles.content}>
                <Text style={styles.subTitle}>Nombre de usuario</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder='Ej: fulanito'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize='none'
                        />
                    )}
                    name='username'
                    rules={{ required: 'El nombre de usuario es requerido' }}
                />
                {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}
            </View>
            <View style={styles.content}>
                <Text style={styles.subTitle}>Contraseña</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder='Ej: 12345'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry
                        />
                    )}
                    name='password'
                    rules={{ required: 'La constraseña es requerida' }}
                />
                {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit(handleLogin)}>

                <Text style={styles.buttonText}><Ionicons name="log-in-outline" size={24} color="white" />  Entrar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}