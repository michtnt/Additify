/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import { Container, Content, List, ListItem, Header, Left, Text, Body, Right, View } from "native-base";
import Icon from "react-native-vector-icons/Feather";
import mockData from "../../data/mockData";

class Result extends Component {

    constructor(props: Props) {
        super(props);
        this.state = {
          loading: true,
          result: []
      }
    }
    
    renderItem = ({ item, index }) => {
        return (
          <View style={{backgroundColor: "transparent"}}>
              <Text>{item.name}</Text>
            {/* <LibraryList
              item={item}
              onPress={()=>{
                this.props.navigation.navigate("LibraryDetails", {
                  selectedLibrary: item,
                  index
                })
              }}
            /> */}
          </View>
        );
      };

    componentDidMount(){
        let detectedItems;
        let concatedResult;
        
        const detectionResult = this.props.navigation.getParam("result")
        if(detectionResult){
        detectionResult.map(first => { // first depth
            first.map(second => { // second depth
                console.log(second.text)
                mockData.map((item,i)=>{ // match with database
                    if ( item.name && (item.name.toLowerCase().match(/second.text/) ||  second.text.toLowerCase().match(/item.name/))){
                        console.log("Found it!")
                        console.log(item)
                    detectedItems.push(item); // push result
                    }
                });
            })
        })
        console.log(detectedItems)
        this.setState({ result: detectedItems })
    }
    }
    render(){
        return(
            <Container>
                <Content>
                    <FlatList
                        data={this.state.result}
                        renderItem={this.renderItem}
                        keyExtractor={data => data.code}
                    />
                </Content>
            </Container>
        )
    }

}

export default Result;