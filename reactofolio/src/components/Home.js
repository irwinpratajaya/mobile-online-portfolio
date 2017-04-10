import React, { Component } from 'react';
import { Container } from 'native-base';
import { Image } from 'react-native';

import Head from './Header'
import Konten from './Content'
import Foot from './Footer'

class Home extends Component {
  render() {
    return (
      <Container>

        <Head />

        <Konten />

        <Foot />

      </Container>
    );
  }
}


export default Home
