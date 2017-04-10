import React, { Component } from 'react';
import { Container, Header, Title, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail } from 'native-base';
import { TabHeading, Tab, Tabs } from 'native-base';
// import Tab1 from './tabOne';
// import Tab2 from './tabTwo';


const Foot = () => {
  return (
    <Footer >
      <FooterTab>
        <Button active>
          <Icon name='home' />
        </Button>
        <Button>
          <Icon name='person' />
        </Button>
      </FooterTab>
    </Footer>
  )
}

export default Foot
