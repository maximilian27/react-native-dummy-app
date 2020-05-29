import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import {Platform} from 'react-native';
import Colors from "../constants/colors";
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FiltersScreen';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const defaultStackNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.navBackground: '',
    },
    headerTintColor: Platform.OS === 'android' ? Colors.lightText : ''
}

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailsScreen
},
{ defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailsScreen
},{ defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: 'Meals!',
      tabBarIcon: (tabInfo) => {
        return <Ionicons
          name='ios-restaurant'
          size={25}
          color={Platform.OS === 'android' ? Colors.lightText : null}/>
      }
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons
          name='ios-star'
          size={25}
          color={Platform.OS === 'android' ? Colors.lightText : null}/>
      }
    }
  }
}, {
  tabBarOptions: {
    inactiveBackgroundColor: Platform.OS === 'android' ? Colors.navBackground: null,
    activeBackgroundColor: Platform.OS === 'android' ? Colors.defaultBackground: null
  }
});

const FiltersNavigator = createStackNavigator({
  Filters: FilterScreen
})

const MainNavigator = createDrawerNavigator({
  MealFavs: tabScreenConfig,
  Filters: FiltersNavigator

});

export default createAppContainer(MainNavigator);
