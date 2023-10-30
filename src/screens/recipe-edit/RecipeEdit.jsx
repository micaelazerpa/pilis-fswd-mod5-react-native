import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

export const RecipeEdit=({route})=>{
    const {item} = route.params
    return(
        <Text>Se edita la receta</Text>
    )
}