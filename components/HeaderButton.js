import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from  '@expo/vector-icons';
import Colors from '../constants/colors';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Colors.lightText}/>
  );
};

const styles = StyleSheet.create({});

export default CustomHeaderButton;
