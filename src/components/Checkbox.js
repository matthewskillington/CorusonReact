import React from 'react';
import { Switch, Text, View } from 'react-native';
import styles from "./../Styles";

class CheckboxWithLabel extends React.Component {

    state = {switchValue: false}

    toggleSwitch = (value) => {
        this.setState({switchValue: value})
    }
    
    render (){
        return (
            <View style={styles.checkboxWrapper}>
                <Text style={styles.baseText}>{this.props.label}</Text>
                <Switch 
                    style={styles.switch}
                    onValueChange={this.toggleSwitch}
                    value={this.state.switchValue}/>
            </View>
        )
    }
    
}

export default CheckboxWithLabel;