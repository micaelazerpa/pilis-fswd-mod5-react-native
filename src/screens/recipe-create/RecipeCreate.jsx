import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { styles } from './RecipeCreate.styles'
import { postRecipe } from '../../api/recipe.service'
import { useNavigation } from '@react-navigation/native'

export const RecipeCreate = () => {
    const navigation = useNavigation()
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            description: '',
            image: '',
            ingredients: '',
            preparation: '',
            time: ''
        }
    })

    const handleRecipe = (data) => {
        postRecipe(data)
            .then(data => {
                console.log({ data })
                ToastAndroid.show('Receta creada correctamente!', ToastAndroid.LONG, ToastAndroid.TOP);
                navigation.navigate('Explorer',{reload:true})
            })
            .catch(err => console.warn(err))
    }

    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}> Crea una receta </Text>
            <View style={styles.content}>
                <Text style={styles.subTitle}>Ingrese el nombre de la receta</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre de la Receta'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize='none'
                        />
                    )}
                    name='name'
                    rules={{ required: 'El nombre de la receta es requerido' }}
                />
                {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
            </View>
            <View style={styles.content}>
                <Text style={styles.subTitle}>Ingrese una breve descripción de la receta</Text>

                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder='Descripción'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize='none'
                        />
                    )}
                    name='description'
                    rules={{ required: 'La descripción es requerida' }}
                />
                {errors.description && <Text style={styles.errorText}>{errors.description.message}</Text>}
            </View>
            <View style={styles.content}>
                <Text style={styles.subTitle}>Ingrese la url de la imagen de la receta</Text>

                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder='Ej: https://cocinerosargentinos.com/content/recipes/500x500/tamales-litoralenos.5656.jpg'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize='none'
                        />
                    )}
                    name='image'
                    rules={{ required: 'La imagen es requerida' }}
                />
                {errors.image && <Text style={styles.errorText}>{errors.image.message}</Text>}
            </View>
            <View style={styles.content}>
                <Text style={styles.subTitle}>Ingrese los ingredientes de la receta</Text>

                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder='Ej: Choclo desgranado \n Queso fresco \n Azúcar \n Sal al gusto'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize='none'
                        />
                    )}
                    name='ingredients'
                    rules={{ required: 'El nombre de la receta es requerido' }}
                />
                {errors.ingredients && <Text style={styles.errorText}>{errors.ingredients.message}</Text>}
            </View>
            <View style={styles.content}>
                <Text style={styles.subTitle}>Ingrese la preparacion de la receta</Text>

                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder='Pasos de la preparacion'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize='none'
                        />
                    )}
                    name='preparation'
                    rules={{ required: 'Los pasos de la receta es requerido' }}
                />
                {errors.preparation && <Text style={styles.errorText}>{errors.preparation.message}</Text>}
            </View>
            <View style={styles.content}>
                <Text style={styles.subTitle}>Ingrese el tiempo que lleva la realizar la receta</Text>

                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            placeholder='Ej: 01:30'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize='none'
                        />
                    )}
                    name='time'
                    rules={{ required: 'El nombre de la receta es requerido' }}
                />
                {errors.time && <Text style={styles.errorText}>{errors.time.message}</Text>}
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit(handleRecipe)}>
                <Text style={styles.buttonText}>Crear</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}