import React from 'react';
import {
  FlatList,
  Platform,
} from 'react-native';

import { CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item} from  'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton'


const CategoriesScreen = props => {
  const renderGridItem = (itemData) => {

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate('CategoryMeals',  {
              categoryId: itemData.item.id
            }
        );
      }}/>
    );
  };
  return (
    <FlatList
      style={{ backgroundColor: Platform.OS === 'android' ? '#222' : null}}
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderGridItem}/>
  );
};

// CategoriesScreen.navigationOptions = (navData) => {
//   return {
//     headerTitle: 'Meal Categories',
//     headerLeft:
//       <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//         <Item
//           title="Menu"
//           iconName="ios-menu"
//           onPress={() => {
//             navData.navigation.toggleDrawer();
//           }}/>
//       </HeaderButtons>
//   }
// };

export const screenOptions = (navData) => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: () =>
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}/>
      </HeaderButtons>
  }

};



export default CategoriesScreen;
