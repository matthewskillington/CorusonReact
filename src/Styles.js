import {
    StyleSheet,
  } from 'react-native';
import DarkTheme from './themes/DarkTheme';
import LightTheme from './themes/LightTheme';

const palette = DarkTheme;

/*{
    ApplicationFrameColour: "#232D2F",
    PrimaryColor: "#00D1B2",
    MasterGrey100: "#FFFFFF",
    FieldBorderColor: "#39454B",
    FieldBackgroundColor: "#4D5A60",
    MasterGrey100: "#FFFFFF"
}*/

const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: palette.ApplicationFrameColour
    },

    appFrame : {
      backgroundColor: palette.ApplicationFrameColour,
      height: "100%",
      width: "100%",
      alignItems: 'center',
      padding: 16
    },

    baseText: {
      fontSize: 14,
      color: palette.MasterGrey100,
      marginTop: 6
    },

    baseHeader: {
      fontSize: 20,
      fontWeight: "bold",
      color: palette.MasterGrey100
    },

    logoImage: {
      height: 45,
      width: 133,
      marginTop: 40,
      marginBottom: 20,
      tintColor: palette.LogoImageColor
    },

    checkboxWrapper: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 30,
      width: 180
    },

    switch: {
      marginLeft: 'auto'
    },
    
    ssoButton: {
      width: "100%",
      height: 50,
      backgroundColor: palette.PrimaryColor,
      color: palette.MasterGrey100,
      marginTop: 40,
      borderRadius: 2,
      justifyContent: "center",
      alignItems: "center"
    },
    
    ssoButtonTitle: 
    {
      color: palette.ApplicationFrameColour,
      fontSize: 20,
      fontWeight: 'bold'
    },

    divider: {
      backgroundColor: palette.MasterGrey100,
      height: 1,
      width: '100%',
      marginVertical: 8
    },

    textInput: {
      height: 40,
      width: '100%',
      paddingHorizontal: 8,
      borderColor: palette.FieldBorderColor,
      borderWidth: 1,
      backgroundColor: palette.FieldBackgroundColor,
      color: palette.MasterGrey100
    },

    orLabel: {
      marginTop: -18,
      textAlign: "center",
      backgroundColor: palette.ApplicationFrameColour,
      height: 20,
      width: 40
    }

  });

export default styles;
  