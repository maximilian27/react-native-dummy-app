import React from 'react';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { useSelector } from  'react-redux';
import Colors from '../constants/colors';

import {Platform, Text, View} from 'react-native';

const FavoritesScreen = props => {
  const favoriteMeals = useSelector(state => {
    return state.meals.favoriteMeals
  });

  // const favMeals = availableMeals;
  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View  style={{
        backgroundColor: Platform.OS === 'android' ? Colors.defaultBackground: null,
        height: '100%'
      }}>
        <Text style={{color: Platform.OS === 'android' ? Colors.lightText : null}}>
          No favorites yet!
        </Text>
      </View>

    )
  } else
  return (
    <MealList
      listData={favoriteMeals}
      navigation={props.navigation}/>
  );
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle:  'Your favorites',
    headerLeft:
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}/>
      </HeaderButtons>
  }
}


export default FavoritesScreen;
