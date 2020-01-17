import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import styles from "./Styles";
import strings from './Strings';
import CheckboxWithLabel from './components/Checkbox';
import Divider from './components/Divider';

class App extends React.Component {
  render() {
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
          <TouchableOpacity
            style={styles.ssoButton}>
            <Text style={styles.ssoButtonTitle}>{strings.ssoButtonTitle}</Text>
          </TouchableOpacity>
  
          <Divider style={{marginTop: 75}} />
          <Text
            style={[styles.baseText, styles.orLabel]}>{strings.orLabel}</Text>
          <Text
            style={[styles.baseHeader, {marginVertical: 30, fontSize: 14}]}>{strings.loginCoruson}</Text>
  
          <Text
            style={[styles.baseText, {alignSelf: 'flex-start', marginBottom: 10}]}>{strings.usernameLabel}</Text>
          <TextInput
            style={[styles.textInput, {marginBottom: 20}]}/>
  
          <Text
            style={[styles.baseText, {alignSelf: 'flex-start', marginBottom: 10}]}>{strings.passwordLabel}</Text>
          <TextInput
            style={styles.textInput}/>
  
          <TouchableOpacity
            style={styles.ssoButton}
            onPressOut={this.onLogin}>
            <Text style={styles.ssoButtonTitle}>{strings.loginButton}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  onLogin = async function()
  {
    try
    {
      let response = await fetch('https://api.gaelenlighten.com/api/v2/AccountManagement/Login', {
        method: 'post',
        headers:
        {
          "GaelEnlightenApi_HostToken": "mobile-dev.gaelenlighten.com",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
        {
          "emailAddressOrUsername": this.username,
          "password": this.password,
          "deviceId": "1234",
          "windowsAuth": false
        })
      });
  
      console.info(response);
      let responseJson = await response.json();
      console.info(responseJson);
    }
    catch (error) 
    {
      console.error(error);
    }
  }
}

export default App;
