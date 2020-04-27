import React from 'react';
import { 
    Header,
  Button,
  Left,
  Body,
  Title,
  Icon,
  Right
 } from 'native-base';

export default (props) => {
    return (
        <Header>
          <Left>
            <Button
              transparent
            >
              <Icon name="ios-menu" onPress={() => props.navigation.openDrawer()}/>
            </Button>
          </Left>
          <Body>
            <Title>Charades</Title>
          </Body>
          <Right />
        </Header>
    );
}