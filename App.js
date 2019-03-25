import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  Button,
  Text,
  Header,
  Icon,
  Footer,
  FooterTab,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  Title,
  Container
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <Header>
            <Left />
            <Body>
              <Title>MG</Title>
            </Body>
            <Right />
          </Header>
          <Text>MG</Text>
          <Card>
            <CardItem>
              <Image
                source={{
                  uri:
                    "https://media.giphy.com/media/26tPo1I4XyWzIBjFe/giphy.gif"
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
          </Card>
          <Icon name="trophy" type="EvilIcons" />
        </ScrollView>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
