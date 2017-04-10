import React, { Component } from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail } from 'native-base';
import { Image } from 'react-native';

const Head = () => {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body>
        <Title>REACTOFOLIO</Title>
      </Body>
        <Right />
    </Header>
  )
}

export default Head
