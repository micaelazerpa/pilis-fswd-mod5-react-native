import React, {useContext} from "react";
import { UserContext } from "../../contexts/UserContext";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles } from "./RecipeDetailScreen.styles";
import { Link } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native'

export const RecipeDetailScreen=({route})=>{
    const {item} = route.params
    const navigation = useNavigation()
    const { currentUser, setCurrentUser } = useContext(UserContext)
    //console.log('item---------------',item)
    return(
        <ScrollView style={styles.container}>
            
            <View style={styles.container}>
                <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
                    <Image source={{ uri:item.image }} style={styles.image}/>
                </ScrollView>
            </View>
            <View>
            <TouchableOpacity 
                style={styles.button} 
                onPress={()=> navigation.navigate('RecipeEdit', {item})}
                keyExtractor={(item) => item.id}>
                <Text style={styles.buttonText} >Editar</Text>
            </TouchableOpacity>
                {/* {currentUser && ( 
                    <Link style={styles.button} to={{screen: 'RecipeEdit', params:{item}}}>
                    Editar receta
                </Link>
                 )} */}
                
            </View>
            <View>
                <Text style={styles.title}> {item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.description}>{item.ingredients}</Text>
                <Text style={styles.description}>{item.preparation}</Text>
                <Text style={styles.description}>{item.time}</Text>
            </View>
            
        </ScrollView>
    )
}