import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "./RecipeDetailScreen.styles";

export const RecipeDetailScreen=({route})=>{
    const {item} = route.params
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}> {item.name}</Text>
            <View style={styles.container}>
                <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
                    <Image source={{ uri:item.image }} style={styles.image}/>
                </ScrollView>
            </View>
            <View>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.description}>{item.ingredients}</Text>
                <Text style={styles.description}>{item.preparation}</Text>
                <Text style={styles.description}>{item.time}</Text>
            </View>
            
        </ScrollView>
    )
}