import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button, Platform, Image } from 'react-native';
import { MEALS} from '../data/dummy-data';
import Colors from "../constants/colors";
import { HeaderButtons, Item} from 'react-navigation-header-buttons';

import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  )
}
const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

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
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName="ios-star"
          color={Colors.favouritesIcon}
          onPress={() => {

          }}/>
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
    backgroundColor: Colors.navBackground,
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
