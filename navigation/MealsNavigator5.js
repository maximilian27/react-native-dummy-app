import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from  '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import React from 'react';
import CategoriesScreen, { screenOptions as categoriesScreenOptions } from '../screens/CategoriesScreen';
import CategoryMealsScreen, { screenOptions as categoryMealsScreenOptions }from "../screens/CategoryMealsScreen";
import MealDetailsScreen, { screenOptions as mealDetailsScreenOptions } from "../screens/MealDetailsScreen";
import {Platform} from "react-native";
import Colors from "../constants/colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import FilterScreen, {screenOptions as filterScreenOptions} from "../screens/FiltersScreen";
import { Ionicons } from '@expo/vector-icons';



const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.navBackground: null,
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {

  },
  headerTintColor: Platform.OS === 'android' ? Colors.lightText : null
}

const MealsNavigator = createStackNavigator();


const MealsStackNavigator = () => {
  return (
    <MealsNavigator.Navigator screenOptions={defaultStackNavOptions}>
      <MealsNavigator.Screen
        name="Categories"
        component={CategoriesScreen}
        options={categoriesScreenOptions}/>
      <MealsNavigator.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={categoryMealsScreenOptions}/>
      <MealsNavigator.Screen
        name="MealDetail"
        component={MealDetailsScreen}
        options={mealDetailsScreenOptions}/>
    </MealsNavigator.Navigator>
  )
};

const FavNavigator = createStackNavigator();

const FavStackNavigator = () => {
  return (
    <FavNavigator.Navigator screenOptions={defaultStackNavOptions}>
      <FavNavigator.Screen
        name="Favorites"
        component={FavoritesScreen}/>
      <FavNavigator.Screen
        name="MealDetail"
        component={MealDetailsScreen}/>
    </FavNavigator.Navigator>
  );
};

const MealsNavTabNavigator = createBottomTabNavigator();

const MealsNavTabStackNavigator = () => {
  return (
    <MealsNavTabNavigator.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            iconName = route.name === 'Meals' ? 'ios-restaurant' : 'ios-star';
            // You can return any component that you like here!
            return <Ionicons
              name={iconName}
              size={25}
              color={Platform.OS === 'android' ? Colors.lightText : null} />;
          },
        })}
       tabBarOptions={{
         inactiveBackgroundColor: Platform.OS === 'android' ? Colors.navBackground: null,
         activeBackgroundColor: Platform.OS === 'android' ? Colors.defaultBackground: null
       }}>
      <MealsNavTabNavigator.Screen
        name="Meals"
        component={MealsStackNavigator}/>
      <MealsNavTabNavigator.Screen
        name="Favorites"
        component={FavStackNavigator}/>
    </MealsNavTabNavigator.Navigator>
  );
};

const FiltersNavigator = createStackNavigator();

const FiltersStackNavigator = () => {
  return (
      <FiltersNavigator.Navigator screenOptions={defaultStackNavOptions}>
        <FiltersNavigator.Screen
          name="Filters"
          component={FilterScreen}
          options={filterScreenOptions}/>
      </FiltersNavigator.Navigator>
    )
};

const DrawerNavigator = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <DrawerNavigator.Navigator
      drawerStyle={{
        backgroundColor: Platform.OS === 'android' ? Colors.navBackground: '#eee'
      }}
      drawerContentOptions={{
        inactiveTintColor: Platform.OS === 'android' ? Colors.lightText: null
        // itemStyle: { marginVertical: 30 },
      }}>
      <DrawerNavigator.Screen
        name="MealFavs"
        component={MealsNavTabStackNavigator}/>
      <DrawerNavigator.Screen
        name="Filters"
        component={FiltersStackNavigator}/>
    </DrawerNavigator.Navigator>
  )
};


const AppNavigator = props => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator;
