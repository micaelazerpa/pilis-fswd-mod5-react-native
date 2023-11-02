import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { styles } from "./RecipesListScreen.styles";
import { getRecipeList } from "../../api/recipe.service";
import { SearchBar } from "../../components/search-bar/SearchBar";
import { Link } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

export const RecipesListScreen = ({ navigation, route }) => {
    const [recipeList, setRecipeList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const { currentUser, setCurrentUser } = useContext(UserContext)

    const handleSearch = (query) => {
        setSearchQuery(query)
    }
    const filterRecipe = recipeList.filter(recipe => (recipe.name.toLowerCase().includes(searchQuery.toLowerCase())))

    useEffect(() => {
        getRecipeList().then(data => {
            setRecipeList(data)
        })
            .catch(err => console.log(err))
    }, [route.params]);
    //console.log('---------------------en lista', route)

    const recipes = ({ item }) => (
        <Pressable onPress={() => navigation.navigate('Detalle', { item })}>
            <View style={styles.itemContainer}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.itemImage}
                />
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.text}>{item.description}</Text>
            </View>
        </Pressable>
    )

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
            {currentUser && ( 
                <View>
                    <Text style={styles.title}> ¿Quieres crear una receta?</Text>

                    <Link style={styles.button} to={{ screen: 'RecipeCreate' }}>
                    <Ionicons name="add" size={24} color="white" />
                         Crear receta
                    </Link>
                </View>
            )} 

            <FlatList
                data={filterRecipe}
                renderItem={recipes}
                keyExtractor={(item) => item.id}
                style={styles.itemList}
            />

        </SafeAreaView>
    )
}