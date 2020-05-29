import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Colors from '../constants/colors';


const FilterScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The FilterScreen Screen</Text>
    </View>
  );
};

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filter Meals',
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.OS === 'android' ? Colors.defaultBackground : null
  }
});

export default FilterScreen;
