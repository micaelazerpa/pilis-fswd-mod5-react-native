import React from "react";
import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { styles } from "./RecipesListScreen.styles";
import { getRecipeList } from "../../api/recipe.service";


export const RecipesListScreen = () => {
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        getRecipeList().then(data => {
            setRecipeList(data)
          })
        .catch(err => console.log(err))
    }, []);

    const recipes = ( {item}) => (
        <Pressable>
            <View style={styles.itemContainer}>
                <Image
                    source={{ uri:item.image }}
                    style={styles.itemImage}
                /> 
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemTitle}>{item.description}</Text>
            </View>
        </Pressable>
    )

    return (
        <SafeAreaView style={styles.container}>
             <Text> Lista de recetas</Text>
            <FlatList
                data={recipeList}
                renderItem={recipes}
                keyExtractor={(item) => item.id}
                style={styles.itemList}
            />
           
        </SafeAreaView>
    )
}