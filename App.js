import React, { Component } from 'react';
import { View } from 'react-native';

import RenderFoods from './components/RenderFoods';

export default class App extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 60 }}>
        </View>
        <View style={{ flex: 1 }}>
        <RenderFoods/>
        </View>
        <View style={{ height: 60 }}>
        </View>
      </View>
    );
  }
};

// AppRegistry.registerComponent('Foodz', () => App);
