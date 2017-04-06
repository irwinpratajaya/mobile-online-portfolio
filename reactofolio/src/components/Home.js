import React, { Component } from 'react';


import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail } from 'native-base';
import { Image } from 'react-native';

class Home extends Component {
  render() {
    return (
      <Container>
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

        <Content>
        <Card >
                      <CardItem>
                          <Left>
                              <Thumbnail source={{uri: 'http://cdn.lifebuzz.com/images/44788/lifebuzz-bb2f8f6ac0588777187234520ea63550-limit_2000.jpg'}} />
                              <Body>
                                  <Text>NativeBase</Text>
                                  <Text note>GeekyAnts</Text>
                              </Body>
                          </Left>
                        </CardItem>

                        <CardItem cardBody>
                            <Image style={{ resizeMode: 'cover', height: 200, width: '100%'}} source={{uri: 'http://cdn.lifebuzz.com/images/44788/lifebuzz-bb2f8f6ac0588777187234520ea63550-limit_2000.jpg'}} />
                        </CardItem>

                        <CardItem content>
                            <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                            Are you telling me that you built a time machine... out of a DeLorean?!
                            Whoa. This is heavy.</Text>
                        </CardItem>
                        
                        <CardItem >
                            <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>12 Likes</Text>
                            </Button>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4 Comments</Text>
                            </Button>
                            <Text>11h ago</Text>
                      </CardItem>
                 </Card>
        </Content>

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


export default Home
