import React, {PureComponent} from 'react';
import {Text, Dimensions, StyleSheet} from 'react-native';
import {
  Content,
  Container,
  Header,
  Left,
  Button,
  Right,
  ListItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

const status = ['name', 'status', 'info', 'function', 'notice', 'foods', 'url'];
class LibraryDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: null,
      imageBase64: null,
      newImage: false,
    };
  }

  render() {
    const selected = this.props.navigation.getParam('selectedLibrary');
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Text
              style={styles.headerTitle}
              ellipsizeMode="tail"
              numberOfLines={1}>
              Details
            </Text>
          </Left>
          <Right>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Icon active name="x" style={styles.icon} />
            </Button>
          </Right>
        </Header>
        <Content
          style={{paddingHorizontal: 20, paddingBottom: 20, paddingTop: 20}}>
          {status.map((s) => (
            <>
              <ListItem itemDivider style={{backgroundColor: 'white'}} />
              <Text style={styles.title}>{s}</Text>
              <ListItem style={styles.list}>
                <Text>
                  {selected[s] ? selected[s] : 'No details provided.'}
                </Text>
              </ListItem>
            </>
          ))}
          <ListItem itemDivider style={{backgroundColor: 'white'}} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    borderBottomWidth: 0,
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 15,
  },
  deleteButton: {
    marginTop: 10,
    padding: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#E0F4EA',
    width: 140,
    height: 60,
  },
  icon: {
    fontSize: 20,
  },
  title: {
    fontSize: 15,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  list: {
    borderBottomColor: '#E4F3FF',
    borderBottomWidth: 2,
  },
  submit: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LibraryDetails;
