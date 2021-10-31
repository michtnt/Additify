/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {PureComponent} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Text, Badge, Row, Left, Right} from 'native-base';

class LibraryList extends PureComponent {
  onPressed = (event) => {
    const {onPress, item} = this.props;
    onPress(item, event.nativeEvent);
  };

  render() {
    const {item, style} = this.props;
    return (
      <View>
        <TouchableOpacity activeOpacity={0.5} onPress={this.onPressed}>
          <View
            style={{
              ...styles.container,
              borderColor:
                item.status == 'Safe'
                  ? '#AABA78'
                  : item.status == 'Warning'
                  ? '#F9C74F'
                  : '#F94144',
            }}
            pointerEvents="box-only">
            {/* <Image source={require("../../../../assets/1.png")}/> */}
            <View style={{flexDirection: 'row'}}>
              <Row>
                <Left>
                  <Text numberOfLines={1} style={[styles.titleText]}>
                    {item.name}
                  </Text>
                </Left>
                {item.status === 'Safe' ? (
                  <Badge success style={styles.badge}>
                    <Text style={styles.badgeText}>{item.status}</Text>
                  </Badge>
                ) : item.status === 'Hazard' ? (
                  <Badge danger style={styles.badge}>
                    <Text style={styles.badgeText}>{item.status}</Text>
                  </Badge>
                ) : (
                  <Badge warning style={styles.badge}>
                    <Text style={styles.badgeText}>{item.status}</Text>
                  </Badge>
                )}
              </Row>
            </View>
            <Text style={{marginTop: 10, color: '#707070'}}>
              {item.function}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 90,
    marginHorizontal: 16,
    marginVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 20,
    paddingVertical: 11,
    borderWidth: 1,
    // ...getPlatformElevation(2),
  },
  header: {
    height: 53,
    alignItems: 'center',
  },
  content: {
    height: 30,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 30,
    marginRight: 55,
  },
  badge: {
    marginTop: 5,
    height: 30,
    width: 100,
  },
  badgeText: {
    fontSize: 16,
  },
});

export default LibraryList;
