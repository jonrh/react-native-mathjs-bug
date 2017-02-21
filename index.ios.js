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
//let Decimal = require("decimal.js");
let math = require("mathjs");

export default class ReactNativeMathjsBug extends Component {
  render() {
    //const decimalAnswer = new Decimal(0.3).minus(0.1);
    const mathjsAnswer = math.subtract(math.bignumber(0.3), math.bignumber(0.1));

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native Math.js Bug
        </Text>

        {/* From when I was testing decimal.js v7.1.1 and v5.0.8.
            React Native packager can produce production bundle in v7.1.1 but not v5.0.8
        <Text>{`JavaScript: 0.3 - 0.1 = ${0.3 - 0.1}`}</Text>
        <Text>{`With decimal.js: 0.3 - 0.1 = ${decimalAnswer}`}</Text>
        */}

        {/* For testing/showcasing Math.js. Works in simulator but React Native
            packager can't produce a production bundle because it uses decimal.js v5.0.8.
        */}
        <Text>{`JavaScript: 0.3 - 0.1 = ${0.3 - 0.1}`}</Text>
        <Text>{`With Math.js: 0.3 - 0.1 = ${mathjsAnswer}`}</Text>


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
