import {
    StyleSheet,
  } from 'react-native';

const palette = {
    ApplicationFrameColour: "#232D2F",
    PrimaryColor: "#00D1B2",
    TextColor: "#FFFFFF"
}

const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: palette.ApplicationFrameColour
    },

    appFrame : {
      backgroundColor: palette.ApplicationFrameColour,
      height: "100%",
      width: "100%",
      alignItems: 'center'
    },

    baseText: {
      fontSize: 14,
      color: palette.TextColor,
      marginTop: 6
    },

    baseHeader: {
      fontSize: 20,
      fontWeight: "bold",
      color: palette.TextColor
    },

    logoImage: {
      height: 45,
      width: 133,
      marginTop: 40,
      marginBottom: 20
      
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
      backgroundColor: palette.PrimaryColor,
      color: palette.TextColor,
      marginTop: 40
    }



  });

  export default styles;