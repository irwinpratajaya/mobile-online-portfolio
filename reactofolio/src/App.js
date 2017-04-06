import React, { Component } from 'react';
import { Navigator } from 'react-native'

import Home from './components/Home'

export default class reactofolio extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'home', newsobj: {} }}
        renderScene={(route, navigator) => {
          switch (route.title) {
            case 'home':
              return <Home navigator={navigator} />
            default:
              return <Home />
          }
        }}
      />
    );
  }
}
