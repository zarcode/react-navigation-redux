/* @flow */

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { NavigationActions } from "react-navigation";

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                    <Text>I'm the HomeScreen component</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});