/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
    TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NavigationActions } from "react-navigation";

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
            onPress={() => {
                this.props.navigation.dispatch(
                    NavigationActions.navigate({
                        routeName: 'Main'
                    }),
                )
            }
            }
        >
            <Text>I'm the LoginScreen component</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});