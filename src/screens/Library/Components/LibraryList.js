/* eslint-disable prettier/prettier */
import React, { PureComponent } from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Text, Badge } from "native-base";


class LibraryList extends PureComponent {
    onPressed = event => {
      const { onPress, item } = this.props;
      onPress(item, event.nativeEvent);
    };

    render() {
      const { item, style } = this.props;
      return (
        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={this.onPressed}>
            <View style={[styles.container, style]} pointerEvents="box-only">
              {/* <Image source={require("../../../../assets/1.png")}/> */}
              <Text numberOfLines={1} style={[styles.titleText]}>{item.name}</Text>
              { item.status == "Safe" ? <Badge success><Text>{item.status}</Text></Badge> : <Badge warning><Text>{item.status}</Text></Badge> }
              <Text style={{marginTop: 10}}>{item.function}</Text>
           </View>
           </TouchableOpacity>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      height: 105,
      marginHorizontal: 16,
      marginVertical: 4,
      paddingHorizontal: 16,
      borderRadius: 5,
      borderBottomWidth: 2,
      borderColor: "powderblue",
      paddingVertical: 11,
      // ...getPlatformElevation(2),
    },
    header: {
      height: 53,
      alignItems: "center",
    },
    content: {
      height: 30,
      alignItems: "center",
    },
    titleText: {
      fontSize:15,
      fontWeight:"600",
      lineHeight:30,
      marginRight:55
    },
  });
  
  export default LibraryList;

//   #E0F4EA