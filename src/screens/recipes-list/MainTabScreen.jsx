import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING } from "../../utils/theme";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet} from 'react-native';
import { HomeScreen } from '../home/HomeScreen';
import { ProfileScreen } from "../profile/ProfileScreen";
import { RecipesListScreen } from "./RecipesListScreen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: 'home',
  Profile: 'person',
  Explorer: 'search'
}

const screenOption = ({ route }) => {
  const iconName = TAB_ICON[route.name] // decir la ruta que debe llegar TAB_ICON[Home]
  return {
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar
  }
}

export const MainTabScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOption}>
      <Tab.Screen name="Home" options={{ title: 'Inicio' }} component={HomeScreen} />
      <Tab.Screen name="Explorer" options={{ title: 'Recetas' }} component={RecipesListScreen} />
      <Tab.Screen name="Profile" options={{ title: 'Perfil' }} component={ProfileScreen} />
    </Tab.Navigator>
  );

}

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs
  }
});
