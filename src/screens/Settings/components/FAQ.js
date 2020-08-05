/* eslint-disable prettier/prettier */
import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import { View, Container, Content, List, ListItem, Header, Left, Text, Body, Right, Accordion } from "native-base";
import Icon from "react-native-vector-icons/Feather";

const dataArray = [
    { 
        title: "What is Additify?", 
        content: "Additify is a mobile application where you can scan a product ingredients and see if it is safe or not. We often did not realise how much chemical we put inside our body and Additify could help you to detect these chemical." 
    },
    { 
        title: 'What does "Safe" means?', 
        content: "An additive is considered Safe when there is no adverse effect found consuming it, it will only be hazardous to humans when it is consumed a lot and it is permitted to be used in food." 
    },
    { 
        title: 'What does "Warning" means?', 
        content: "An additive is considered Warning when there is not enough tests conducted to prove that this is safe, there are some linked health problems with this additive and it is recommended to be avoided." 
    },
    { 
        title: 'What does "Hazard" means?', 
        content: "An additive is considered Hazard when it is banned/unpermitted in other countries, tests have shown that it gave dangerous side effects when consumed/touched/inhaled and it is recommended to be avoided." 
    },
    { 
        title: "Where do I get this data?", 
        content: "I retrieve the data from RapidAPI and did an additional data scraping on noshly and WebMD."
    },
    { 
        title: "Why do I decide to made this application?", 
        content: "I originally made this to be a better developer in the future. Then, I realised that this could actually be used to help people to be healthier." 
    },
  ];

class FAQ extends PureComponent {
    _renderHeader(item, expanded) {
        return (
          <View style={{
            flexDirection: "row",
            padding: 20,
            justifyContent: "space-between",
            alignItems: "center" ,
            backgroundColor: expanded ? "#e3f1f1" : "white" }}>
          <Text style={{ fontWeight: "600" }}>
              {" "}{item.title}
            </Text>
            {expanded
              ? <Icon style={{ fontSize: 18 }} name="chevron-up" />
              : <Icon style={{ fontSize: 18 }} name="chevron-down" />}
          </View>
        );
      }
      _renderContent(item) {
        return (
          <Text
            style={{
              backgroundColor: "#e3f1f1",
              paddingLeft: 25,
              paddingRight: 25,
              paddingBottom: 20,
              paddingVertical: 10,
              textAlign: "justify"
            }}
          >
            {item.content}
          </Text>
        );
      }

    render(){
        return(
            <Container>
            <Header style={styles.header}>
                <Left><Icon name="arrow-left" style={styles.icon} onPress={() => {this.props.navigation.goBack()}}/></Left>
            </Header>
            <Content>
                <Text style={styles.title}>FAQ🔎</Text>
            <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            style={{borderWidth: 0}}
          />
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
        fontSize: 50,
        fontWeight: "bold",
        alignSelf: "center",
        marginBottom: 50,
        marginTop: 20
    },
    subtitle: {

    },
    icon:{
      fontSize: 30,
      marginLeft: 15,
      // marginTop: 10
    }
})

export default FAQ;

