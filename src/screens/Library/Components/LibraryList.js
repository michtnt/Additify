/* eslint-disable prettier/prettier */
import React, { PureComponent } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
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
              <Text numberOfLines={1} style={[styles.titleText]}>
                {item.name}
              </Text>
              <Text>{item.status}</Text>               
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
      fontSize:20,
      fontWeight:"bold",
      lineHeight:30,
      marginRight:55
    },
  });
  
  export default LibraryList;

//   #E0F4EA