import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './src/screens/home/HomeScreen';
import { ProfileScreen } from './src/screens/profile/ProfileScreen';
import { UserProvider } from './src/contexts/UserContext';
import { RecipesListScreen } from './src/screens/recipes-list/RecipesListScreen';

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING } from './src/utils/theme';

const Tab = createBottomTabNavigator();

const TAB_ICON ={
  Home: 'home',
  Profile:'person',
  Explorar: 'search'
}

const screenOption =({route})=>{
  const iconName = TAB_ICON[route.name] // decir la ruta que debe llegar TAB_ICON[Home]
  return{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    //headerShown: false,
    tabBarStyle: styles.tabBar
  }
}
export default function App() {
  return (
    <>
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOption}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Explorar" component={RecipesListScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>

    </UserProvider>
    <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs
    /* flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', */
  }
});
