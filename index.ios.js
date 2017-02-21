/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
let Decimal = require("decimal.js");

export default class ReactNativeMathjsBug extends Component {
  render() {
    const decimalAnswer = new Decimal(0.3).minus(0.1);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native Math.js Bug
        </Text>

        <Text>{`JavaScript: 0.3 - 0.1 = ${0.3 - 0.1}`}</Text>
        <Text>{`With decimal.js: 0.3 - 0.1 = ${decimalAnswer}`}</Text>

        <Text></Text>

        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeMathjsBug', () => ReactNativeMathjsBug);
