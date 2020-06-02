import React from 'react';
import { CATEGORIES } from "../data/dummy-data";
import MealList from '../components/MealList';
import { useSelector } from  'react-redux';
import {Platform, Text, View} from 'react-native';
import Colors from "../constants/colors";


const CategoryMealsScreen = props => {

  const catId = props.route.params.categoryId;

  const availableMeals = useSelector(state => {
    return state.meals.filteredMeals
  });

  const displayedMeals = availableMeals.filter(meal =>
    meal.categoryIds.includes(catId)
  );

  if (!displayedMeals.length) {
    return (
      <View style={{
        backgroundColor: Platform.OS === 'android' ? Colors.defaultBackground: null,
        height: '100%'
      }}>
        <Text
          style={{color: Platform.OS === 'android' ? Colors.lightText : null}}>
          NO meals. Check filters!</Text>
      </View>
    )
  } else

  return (
    < MealList listData={displayedMeals} navigation={props.navigation}/>
  );
};

// CategoryMealsScreen.navigationOptions = navigationData => {
//   const catId = navigationData.navigation.getParam('categoryId');
//
//   const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
//
//   return {
//     headerTitle: selectedCategory.title,
//
//   };
// };

export const screenOptions = navigationData => {
  const catId = navigationData.route.params.categoryId;

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,

  };
};



export default CategoryMealsScreen;
