import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ToastAndroid} from "react-native";
import { putRecipe } from "../../api/recipe.service";
import { styles } from "./RecipeEdit.styles";
import { useNavigation } from '@react-navigation/native'

export const RecipeEdit = ({ route }) => {
    const { item: {id, name, description, image, ingredients, preparation, time } } = route.params
    const [formData, setFormData] = useState({
        id: id,
        name: name,
        description: description,
        image: image,
        ingredients: ingredients,
        preparation: preparation,
        time: time
    });
    const navigation = useNavigation()
    //console.log('-datos traidos------------', formData)
    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };
    const handleSaveChanges = async () => {
        try {
          const datos=await putRecipe(id, formData);
          console.log('-datos traidos------------', datos)
          ToastAndroid.show('Receta editada correctamente!', ToastAndroid.LONG, ToastAndroid.TOP);
          navigation.navigate("Detalle",{item: datos}) 
        } catch (error) {
          console.error(
            "Error al editar la receta:",
            error.response
          )
        }
      };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}> Edita la receta </Text>
            <View style={styles.content}>
                <Text style={styles.subTitle}>Ingrese el nombre de la receta</Text>
                <TextInput
                    placeholder="Nombre de la Receta"
                    value={formData.name}
                    onChangeText={(text) => handleInputChange("name", text)}
                    style={styles.input}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.subTitle}>Ingrese una breve descripción de la receta</Text>
                <TextInput
                    placeholder="Descripción"
                    value={formData.description}
                    onChangeText={(text) => handleInputChange("description", text)}
                    style={styles.input}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.subTitle}>Ingrese la url de la imagen de la receta</Text>
                <TextInput
                    placeholder="Imagen"
                    value={formData.image}
                    onChangeText={(text) => handleInputChange("image", text)}
                    style={styles.input}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.subTitle}>Ingrese los ingredientes de la receta</Text>
                <TextInput
                    placeholder="Ingredientes"
                    value={formData.ingredients}
                    onChangeText={(text) => handleInputChange("ingredients", text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.subTitle}>Ingrese la preparacion de la receta</Text>
                <TextInput
                    placeholder="Preparacion"
                    value={formData.preparation}
                    onChangeText={(text) => handleInputChange("preparation", text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.subTitle}>Ingrese el tiempo que lleva la realizar la receta</Text>
                <TextInput
                    placeholder="Hora"
                    value={formData.time}
                    onChangeText={(text) => handleInputChange("time", text)}
                    style={styles.input}
                />
            </View>
            <TouchableOpacity onPress={handleSaveChanges} style={styles.button}>
                <Text style={styles.buttonText}>Guardar cambios</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}