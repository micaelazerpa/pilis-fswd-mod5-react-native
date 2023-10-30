import React, {useContext} from "react";
import { UserContext } from "../../contexts/UserContext";
import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { styles } from "./RecipesListScreen.styles";
import { getRecipeList } from "../../api/recipe.service";
import { SearchBar } from "../../components/search-bar/SearchBar";
import { Link } from "@react-navigation/native";

export const RecipesListScreen = ({navigation}) => {
    const [recipeList, setRecipeList] = useState([]);
    const [searchQuery, setSearchQuery]= useState('');
    
    const { currentUser, setCurrentUser } = useContext(UserContext)

    const handleSearch = (query)=>{
        setSearchQuery(query)
    }
    const filterRecipe = recipeList.filter(recipe => (recipe.name.toLowerCase().includes(searchQuery.toLowerCase())))

    useEffect(() => {
        getRecipeList().then(data => {
            setRecipeList(data)
          })
        .catch(err => console.log(err))
    }, []);
    //console.log('---------------------en lista', recipeList)
       
    const recipes = ( {item}) => (
        <Pressable onPress={()=> navigation.navigate('Detalle', {item})}>
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
            <SearchBar handleSearch={handleSearch} searchQuery={searchQuery}/>
            <View>
                <Text> ¿Quieres crear una receta?</Text>
                {currentUser && (
                        <Link style={styles.button} to={{screen: 'RecipeCreate'}}>
                        Crear receta
                    </Link>
                    )}
            </View>
             
            <FlatList
                data={filterRecipe}
                renderItem={recipes}
                keyExtractor={(item) => item.id}
                style={styles.itemList}
            />
           
        </SafeAreaView>
    )
}