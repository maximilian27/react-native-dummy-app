import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback
} from 'react-native';

const CategoryGridTile = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp
        style={{flex: 1}}
        onPress={props.onSelect}>
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
        </View>
      </TouchableCmp>
    </View>

  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    // alignItems: 'center'
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === 'andorid' && Platform.Version >= 21 ? 'hidden' : 'visible',
    elevation: 5,
    shadowOpacity: .26,

  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right'
  }
});

export default CategoryGridTile;
