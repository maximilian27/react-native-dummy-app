import React from 'react';
import { View, Text, StyleSheet, Button, Platform} from 'react-native';
import { MEALS} from '../data/dummy-data';
import Colors from "../constants/colors";
import { HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton'
import CustomHeaderButton from "../components/HeaderButton";


const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button title="Go back to categories" onPress={() => {
        props.navigation.popToTop();
      }} />
    </View>
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.OS === 'android' ? Colors.defaultBackground : null
  }
});

export default MealDetailsScreen;
