import {
    StyleSheet,
  } from 'react-native';

const palette = {
    ApplicationFrameColour: "#232D2F"
}

const styles = StyleSheet.create({
    page : {
      backgroundColor: palette.ApplicationFrameColour,
      height: "100%",
      width: "100%"
    },
    topSection: {
      height: 200,
      
    },
    header: {
      color: 'red',
      marginTop: 50,
      textAlign: "center"
      
    }
  });

  export default styles;