import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Colors from "../constants/colors";


const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text
                  style={styles.title}
                  numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetails}}>
            <Text style={{color: Colors.lightText}}>{props.duration}m</Text>
            <Text style={{color: Colors.lightText}}>{props.complexity.toUpperCase()}</Text>
            <Text style={{color: Colors.lightText}}>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: 'row'
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#555',
    borderRadius: 15,
    overflow: 'hidden',
  },
  mealHeader: {
    height: '85%'
  },
  mealDetails: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bgImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'open-sans-bold',
    textAlign: 'center'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  }
});

export default MealItem;
