import React from 'react';
import { Text, View } from 'react-native';
import styles from "./../Styles";

function Divider(props)
{
    return(
        <>
            <View
                style={[styles.divider, {...props.style}, {position: 'relative'}]}>
            </View>
        </>
    );
}

export default Divider;