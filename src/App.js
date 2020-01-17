import React from 'react';
import {
  View,
  Image,
  SafeAreaView
} from 'react-native';
import styles from "./Styles";
import CheckboxWithLabel from './components/Checkbox';



const App = () =>{
  return (
    <SafeAreaView
      style={styles.safeArea}>
      <View
      style={styles.appFrame}>
        <Image 
          style={styles.logoImage}
          source={require('./assets/logo.png')}/>
        <CheckboxWithLabel label="Remember me"/>
        <CheckboxWithLabel label="ADFS Login"/>

      </View>
    </SafeAreaView>
    
  );
}




export default App;
