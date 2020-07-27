/* eslint-disable prettier/prettier */
import React, { PureComponent } from "react";
import { 
  View, 
  Text, 
  Dimensions, 
  StyleSheet,
  TouchableOpacity,
  Platform,   
  PermissionsAndroid,
  TouchableWithoutFeedback,
  Image
  } from "react-native";
import { 
  Body, 
  Content, 
  Container, 
  Header, 
  Left, 
  Button, 
  Right, 
  Form, 
  Picker, 
  ListItem, 
  Input,
 } from "native-base";
// import ImagePicker from "react-native-image-crop-picker";
// import ImageResizer from "react-native-image-resizer";
// import RNPermissions from "react-native-permissions";
// import RNFetchBlob from "rn-fetch-blob";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/Feather";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const modalWidth = deviceWidth < deviceHeight ? deviceWidth : deviceHeight;
// const dirs = RNFetchBlob.fs.dirs;

class LibraryDetails extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            imageUri: null,
            imageBase64: null,
            newImage: false,
          };
      }

    // openCamera = async() => {
    //   if (Platform.OS === "android"){
    //     try {
    //       const granted2 = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.CAMERA,
    //         {
    //           title: this.props.screenProps.lang.camera_permission,
    //           message: this.props.screenProps.lang.camera_permission_msg,
    //           buttonNeutral: this.props.screenProps.lang.ask_me_later,
    //           buttonNegative: this.props.screenProps.lang.cancel,
    //           buttonPositive: this.props.screenProps.lang.yes,
    //         },
    //       );
  
    //       const granted = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //         {
    //           title: this.props.screenProps.lang.storage_permission,
    //           message: this.props.screenProps.lang.storage_permission_msg,
    //           buttonNeutral: this.props.screenProps.lang.ask_me_later,
    //           buttonNegative: this.props.screenProps.lang.cancel,
    //           buttonPositive: this.props.screenProps.lang.yes,
    //         },
    //       );
  
    //       if (granted === PermissionsAndroid.RESULTS.GRANTED && granted2 === PermissionsAndroid.RESULTS.GRANTED) {
    //         // this.setState({cameraModalVisible: true});
    //         this.props.navigation.navigate("CameraScreen",{
    //           savePicName: this.savePicName, //이미지를 cameraScreen에서 찍으면 savepicname 을 불러 uri,base64를 저장
    //           selectFromImage: this.selectFromImage
    //         });
    //       } else {
    //         if (granted === PermissionsAndroid.RESULTS.GRANTED){
    //           Alert(null, "Access to your storage has been denied. Please enable them in the app settings.");
    //         } else if (granted2 === PermissionsAndroid.RESULTS.GRANTED) {
    //           Alert(null, "Access to your camera has been denied. Please enable them in the app settings.");
    //         }
    //       }
    //     } catch (err) {
    //       console.warn(err);
    //       Alert(null, err);
    //     }
    //   } else {
    //     // this.setState({cameraModalVisible: true});
    //     this.props.navigation.navigate("CameraScreen",{
    //       savePicName: this.savePicName, //이미지를 cameraScreen에서 찍으면 savepicname 을 불러 uri,base64를 저장
    //       selectFromImage: this.selectFromImage
    //     });
    //   }
    // }
  
    // selectFromImage = async() =>{
    //   if (Platform.OS === "android"){
    //     const permission = await RNPermissions.check(RNPermissions.PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
    //     if (permission !== RNPermissions.RESULTS.GRANTED){
    //       const granted = await RNPermissions.request(RNPermissions.PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
    //       if (granted !== RNPermissions.RESULTS.GRANTED){
    //         Alert(null,"Access to your photos has been denied. Please enable them in the app settings.");
    //         return false;
    //       }
    //     }
    //   }
  
    //   ImagePicker.openPicker({
    //     mediaType: "photo",
    //     // width: 300,
    //     // height: 300,
    //     // compressImageQuality: 1,
    //     // compressImageMaxWidth: 250,
    //     // compressImageMaxHight: 250,
    //     // cropping: true,
    //     loadingLabelText: "Loading....",
    //     avoidEmptySpaceAroundImage: false,
    //     includeBase64: true
    //   }).then( async(image) => {
    //     const resizedImageData = await ImageResizer.createResizedImage(
    //       "data:image/jpeg;base64," + image.data, //imageUri,
    //       640, //newWidth,
    //       640, //newHeight,
    //       "JPEG", //compressFormat,
    //       70, //quality,
    //       0, //rotation,
    //       null
    //     );
  
    //     const resizedUri = Platform.OS === "android" ? resizedImageData.uri : resizedImageData.path;
    //     const resizedBase64 = await RNFetchBlob.fs.readFile(resizedUri,"base64");
  
    //     this.setState({
    //       imageUri: resizedUri,
    //       imageBase64: resizedBase64,
    //       // imageWidth: image.width,
    //       // imageHeight: image.height,
    //       newImage: true,
    //       // transactionData: {
    //       //   ...this.state.transactionData,
    //       //   hi : true
    //       // }
    //     },()=>{
    //     });
    //   });
    // }
  
  
    // savePicName = (data) => {
    //   this.setState({
    //     imageUri: data.uri,
    //     imageBase64: data.base64,
    //     newImage: true,
    //     loading: false,
    //   },()=>{
    //     console.log(this.state);
    //   });
    // }

    // saveImageLocal = async (leaveId) => {
    //   let path = `${dirs.DocumentDir}/${leaveId}.jpg`;
    //   const exists = await RNFetchBlob.fs.exists(path);
  
    //   if (exists){ await RNFetchBlob.fs.unlink(path); }
  
    //   RNFetchBlob.fs.writeFile(path, this.state.imageBase64, "base64")
    //   .then((res)=>{
    //   });
    // }
  

  render() {
    const selected = this.props.navigation.getParam("selectedLibrary");
    return (
        <Container>
        <Header style={styles.header} >
            <Left>
            <Text style={styles.headerTitle} ellipsizeMode="tail" numberOfLines={1}>Details</Text>
            </Left>
            <Right>
            <Button
                transparent
                onPress={() => {
                  this.props.navigation.goBack();
                 }}>
                <Icon active name="x" style={styles.icon}/>
              </Button>
            </Right>
        </Header>
        <Content style={{ paddingHorizontal:20, paddingBottom:20, paddingTop: 20}}>
            <Text style={styles.title}>Name</Text>
            <ListItem style={styles.list}>
              <Text>{selected.name ? selected.name : "No details provided."}</Text>
            </ListItem>

            <ListItem itemDivider style={{backgroundColor: "white"}}/>
            <Text style={styles.title}>Status</Text>
            <ListItem style={styles.list}>
            <Text>{selected.status ? selected.status : "No details provided."}</Text>
            </ListItem>

            <ListItem itemDivider style={{backgroundColor: "white"}}/>
            <Text style={styles.title}>Information</Text>
            <ListItem style={styles.list}>
            <Text>{selected.info ? selected.info : "No details provided."}</Text>
            </ListItem>

            <ListItem itemDivider style={{backgroundColor: "white"}}/>
            <Text style={styles.title}>Function</Text>
            <ListItem style={styles.list}>
            <Text>{selected.function ? selected.function : "No details provided."}</Text>
            </ListItem>

            <ListItem itemDivider style={{backgroundColor: "white"}}/>
            <Text style={styles.title}>Notice</Text>
            <ListItem style={styles.list}>
            <Text>{selected.notice ? selected.notice : "No details provided."}</Text>
            </ListItem>

            <ListItem itemDivider style={{backgroundColor: "white"}}/>
            <Text style={styles.title}>Found in (Food)</Text>
            <ListItem style={styles.list}>
            <Text>{selected.foods ? selected.foods : "No details provided."}</Text>
            </ListItem>

            <ListItem itemDivider style={{backgroundColor: "white"}}/>
            <Text style={styles.title}>Reference</Text>
            <ListItem style={styles.list}>
            <Text>{selected.url ? selected.url : "No details provided."}</Text>
            </ListItem>
            <ListItem itemDivider style={{backgroundColor: "white"}}/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    borderBottomWidth: 0
  },
  headerTitle: {
    fontSize:23,
    fontWeight:"bold",
    color:"black",
    paddingLeft: 15
  },
  deleteButton: {
    marginTop:10,
    padding:12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#E0F4EA",
    width: 140,
    height: 60,
  },
  icon: {
    fontSize: 20
  },
  title: {
    fontSize: 15
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  list: {
    borderBottomColor: "#E4F3FF",
    borderBottomWidth: 2
  },
  submit: {
    textAlign:"center", 
    color: "white", 
    fontSize: 20, 
    fontWeight: "bold"
  }
});

export default LibraryDetails;

