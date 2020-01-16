import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import styles from "./Styles";



const HelloWorldApp = () =>{
  return (
    <>
      <View
      style={styles.page}>
        <View
          style={styles.topSection}>
          <Text
          style={styles.header}>Page one</Text>
        </View>
      </View>
      
    </>
    
  );
}




export default HelloWorldApp;
