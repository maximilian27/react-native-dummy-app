import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from "../constants/colors";

const DefaultText = props => {
  return (
    <Text style={styles.text}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Platform.OS === 'android' ? Colors.lightText : null,
    fontFamily: 'open-sans'
  }
});

export default DefaultText;
