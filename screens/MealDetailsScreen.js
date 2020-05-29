import React, { useEffect, useCallback } from 'react';
import { ScrollView, View, Text, StyleSheet, Button, Platform, Image } from 'react-native';
import Colors from "../constants/colors";
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from  'react-redux';


import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from "../store/actions/mealsActions";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  )
}
const MealDetailsScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals);

  const mealId = props.navigation.getParam('mealId');
  const currentMealIsFavorite = useSelector(state => state.meals.favoriteMeals
    .some(meal => meal.id === mealId));

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId))
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({
      toggleFav: toggleFavoriteHandler
    });
  },[selectedMeal]);

  useEffect(() => {
    props.navigation.setParams({
      isFav: currentMealIsFavorite
    });
  },[currentMealIsFavorite]);

  return (
    <ScrollView style={{backgroundColor: Platform.OS === 'android' ? Colors.defaultBackground : null}}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>

      <Text style={styles.textTitle}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => {
        return <ListItem key={ingredient}>{ingredient}</ListItem>
      })}

      <Text style={styles.textTitle}>Steps</Text>
      {selectedMeal.steps.map(step => {
        return <ListItem key={step}>{step}</ListItem>
      })}

    </ScrollView>

  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  // const mealId = navigationData.navigation.getParam('mealId');
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavorite = navigationData.navigation.getParam('toggleFav')
  // const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const isFavorite = navigationData.navigation.getParam('isFav');

  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName={isFavorite ? 'ios-star' :'ios-star-outline'}
          color={Colors.favouritesIcon}
          onPress={toggleFavorite}/>
      </HeaderButtons>
    )

  }
}

const styles = StyleSheet.create({

  image: {
    width: '100%',
    height: 200
  },
  textTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
    color: Platform.OS === 'android' ? Colors.lightText : null
  },
  details: {
    backgroundColor: Platform.OS === 'android' ? Colors.navBackground : null,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailsScreen;
