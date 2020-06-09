import React from "react";
import { AppRegistry, ImageContent, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Home", "Links", "TaskListScreen"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={require('../../assets/images/robot-dev.png')}
            />
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
