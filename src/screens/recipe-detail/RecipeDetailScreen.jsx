import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles } from "./RecipeDetailScreen.styles";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export const RecipeDetailScreen = ({ route }) => {
    const { item } = route.params
    const navigation = useNavigation()
    const { currentUser, setCurrentUser } = useContext(UserContext)
    //console.log('item---------------',item)
    return (
        <ScrollView style={styles.container}>

            <View>
                <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                </ScrollView>
            </View>

            <View style={styles.fondo}>
                <Text style={styles.title}> {item.name}</Text>

            </View>
            <View style={styles.intro}>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>Ingredientes:</Text>
                <Text style={styles.description}>{item.ingredients}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>Preparación:</Text>
                <Text style={styles.description}>{item.preparation}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>Tiempo estimado de preparación:</Text>
                <Text style={styles.description}>{item.time} Horas</Text>
            </View>
            <View>
                {currentUser && (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('RecipeEdit', { item })}
                        keyExtractor={(item) => item.id}>
                        <Text style={styles.buttonText} ><Ionicons name="pencil-outline" size={24} color="white" />  Editar</Text>
                    </TouchableOpacity>
                )}
            </View>
        </ScrollView>
    )
}