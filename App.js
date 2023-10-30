import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './src/contexts/UserContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabScreen } from './src/screens/recipes-list/MainTabScreen';
import { RecipeDetailScreen } from './src/screens/recipe-detail/RecipeDetailScreen';
import {RecipeEdit} from './src/screens/recipe-edit/RecipeEdit'
import {RecipeCreate} from './src/screens/recipe-create/RecipeCreate'

const RecipeListStack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <RecipeListStack.Navigator screenOptions={{ headerShown: false }}>
            <RecipeListStack.Screen name="Principal" component={MainTabScreen} />
            <RecipeListStack.Screen name="Detalle" component={RecipeDetailScreen} />
            <RecipeListStack.Screen name="RecipeEdit" component={RecipeEdit} />
            <RecipeListStack.Screen name="RecipeCreate" component={RecipeCreate} />
          </RecipeListStack.Navigator>
        </NavigationContainer>
      </UserProvider>
      <StatusBar style='auto' />
    </>
  );
}

