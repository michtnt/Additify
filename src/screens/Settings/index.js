/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Content, List, ListItem, Header, Left, Text, Body, Right } from "native-base";
import Icon from "react-native-vector-icons/Feather";

class Setting extends Component {
    render(){
        return(
            <Container>
                <Header style={styles.header}>
                    <Left><Text style={styles.title}>Settings</Text></Left>
                </Header>
                <Content>
                    <List>
                    <ListItem noBorder icon>
                        <Left><Icon name="alert-triangle" style={styles.icon} /></Left>
                        <Body><Text>Bug Report</Text></Body>
                    </ListItem>
                    <ListItem noBorder icon>
                        <Left><Icon name="star" style={styles.icon} /></Left>
                        <Body><Text>Rate Us</Text></Body>
                    </ListItem>
                    <ListItem noBorder icon>
                        <Text>v.1.0</Text>
                    </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "white",
        borderBottomWidth: 0
    },
    title: {
        fontSize: 25,
        marginLeft: 25,
        fontWeight: "bold"
    },
    subtitle: {

    },
    icon:{
      fontSize: 20,
      marginLeft: 15,
      // marginTop: 10
    }
})

export default Setting;