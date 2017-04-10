import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux'
import { Content, Button, Left, Body, Icon, Text, Card, CardItem, Thumbnail } from 'native-base';

class Konten extends Component {
  constructor(props) {
    super (props)
    this.state = {
      posts: ''
    }
  }

  componentDidMount() {
    console.log('---------------asdasdasd-----------');
    fetch('https://api.myjson.com/bins/1h27gn')
    .then((response) => {
      console.log('ini setelah fetch : hello');
      return response.json()
    })
    .then(data => {
      console.log(data);
      this.props.fetchPosts(data.posts)
    })
    .catch(err => { console.log(err) })
  }

  render() {
    return (
      <Content>
        { this.props.posts.posts.map( (index, item) => {
            return (
              <Card key={index}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'http://cdn.lifebuzz.com/images/44788/lifebuzz-bb2f8f6ac0588777187234520ea63550-limit_2000.jpg'}} />
                      <Body>
                        <Text>
                          Santai di Pantai
                        </Text>
                        <Text note>Irwin</Text>
                      </Body>
                  </Left>
                </CardItem>

                <CardItem cardBody>
                  <Image style={{ resizeMode: 'cover', height: 200, width: '100%'}} source={{uri: 'https://unsplash.it/500/300/?random'}} />
                </CardItem>

                <CardItem content>
                  <Text>
                    Wait a minute. Wait a minute, Doc. Uhhh...
                    Are you telling me that you built a time machine... out of a DeLorean?!
                    Whoa. This is heavy.
                  </Text>
                </CardItem>

                <CardItem >
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>

                </CardItem>
              </Card>
            );
          })
        }

      </Content>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (results) => dispatch({
      type: 'GET_POST',
      payload: results
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Konten)
// export default Konten
