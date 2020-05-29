import React from 'react';
import { CATEGORIES } from "../data/dummy-data";
import MealList from '../components/MealList';
import { useSelector } from  'react-redux';
import { Text } from 'react-native';


const CategoryMealsScreen = props => {

  const catId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector(state => {
    return state.meals.filteredMeals
  });

  const displayedMeals = availableMeals.filter(meal =>
    meal.categoryIds.includes(catId)
  );

  if (!displayedMeals.length) {
    return <Text>NO meals. Check filters!</Text>
  } else

  return (
    < MealList listData={displayedMeals} navigation={props.navigation}/>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,

  }
};


export default CategoryMealsScreen;
