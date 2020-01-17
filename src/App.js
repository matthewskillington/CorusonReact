import React from 'react';
import {
  View,
  Image,
  Text,
  Button,
  SafeAreaView
} from 'react-native';
import styles from "./Styles";
import strings from './Strings';
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
        <CheckboxWithLabel label={strings.rememberMe}/>
        <CheckboxWithLabel label={strings.adfsLogin}/>

        <Text
          style={[styles.baseHeader, {marginTop: 30}]}>{strings.LoginSSOMessage}</Text>
        <Button
          title={strings.ssoButtonTitle}
          style={styles.ssoButton}/>
      </View>
    </SafeAreaView>
    
  );
}




export default App;
