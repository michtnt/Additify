/* eslint-disable prettier/prettier */

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform, Alert,NativeModules } from "react-native";
import { Icon } from "native-base";
import RNFetchBlob from "rn-fetch-blob";
import ImageResizer from "react-native-image-resizer";
import RNPermissions from "react-native-permissions";
import RNTextDetector from "react-native-text-detector";

import CameraScreen from "../../../lib/CameraScreen";
const flashOn = require("../../../assets/flash-on.png");
const flashOff = require("../../../assets/flash-off.png");

let RNCamera = () => null;
if (Platform.OS === "ios") {
  RNCamera = require("react-native-camera").RNCamera;
}

export default class CameraModal extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      flash: "off",
      zoom: 0,
      autoFocus: "on",
      depth: 0,
      type: "back",
      whiteBalance: "auto",
      ratio: "16:9",
      ratios: [],
      photoId: 1,
      showGallery: false,
      photos: [],
      faces: [],
      recordOptions: {
        mute: false,
        maxDuration: 5,
        // quality: RNCamera.Constants.VideoQuality["288p"],
      },
      isRecording: false
    };
  }

  takePicture = async() => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true, width: 400 };
      const data = await this.camera.takePictureAsync(options);
      const visionResp = await RNTextDetector.detectFromUri(data.uri);
      console.log('visionResp', visionResp);
      this.props.navigation.state.params.savePicName({
        uri: data.uri,
        base64: data.base64
      });
    }
    this.props.navigation.goBack();
  };

  async onBottomButtonPressed(event) {
    console.log("onBottomButtonPressed");
    console.log(event);
    const captureImages = JSON.stringify(event.captureImages);
    const uri = event.captureImages[0].uri;

    const resizedImageData = await ImageResizer.createResizedImage(
      uri, //imageUri,
      640, //newWidth,
      640, //newHeight,
      "JPEG", //compressFormat,
      70, //quality,
      0, //rotation,
      null
    );

    if (Platform.OS === "android"){
      const permission = await RNPermissions.check(RNPermissions.PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
      if (permission !== RNPermissions.RESULTS.GRANTED){
        const granted = await RNPermissions.request(RNPermissions.PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
        if (granted !== RNPermissions.RESULTS.GRANTED){
          Alert(null,"Access to your storage has been denied. Please enable them in the app settings.");
          return false;
        }
      }
    }

    const resizedUri = Platform.OS === "android" ? resizedImageData.uri : resizedImageData.path;
    const resizedBase64 = await RNFetchBlob.fs.readFile(resizedUri,"base64");

    this.props.navigation.state.params.savePicName({
      uri: resizedUri,
      base64: resizedBase64
    });
    this.props.navigation.goBack();
  }

  renderCamera() {
    if (Platform.OS === "android"){
      return (
        <CameraScreen
          actions={{ rightButtonText: "Close", leftButtonText: "Album" }}
          onCloseButtonPressed={()=>{
            this.props.navigation.goBack();
          }}
          onSelectImagePressed={()=>{
            this.props.navigation.state.params.selectFromImage();
            this.props.navigation.goBack();
          }}
          onBottomButtonPressed={(event) => {
            this.onBottomButtonPressed(event);
            }}
          flashImages={{
            on: flashOn,
            off: flashOff,
            auto: flashOn
          }}
          // cameraFlipImage={flashOn}
          captureButtonImage={flashOn}
        />
      );
    }
     else {
      return (
        Platform.OS === "ios" ?
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{
            flex: 1,
          }}
          captureAudio={false}
          type={this.state.type}
          flashMode={this.state.flash}
          autoFocus={this.state.autoFocus}
          zoom={this.state.zoom}
          whiteBalance={this.state.whiteBalance}
          ratio={this.state.ratio}
          focusDepth={this.state.depth}
          permissionDialogTitle={"Permission to use camera"}
          permissionDialogMessage={"We need your permission to use your camera phone"}
        >
          <View
            style={{
              flex: 0.5,
              backgroundColor: "transparent",
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: 15
            }}
          >
            <View style={styles.topButtonContainer}>
              <TouchableOpacity style={styles.topButton} onPress={()=>this.props.navigation.goBack()}>
                <Icon active name="md-close" style={{color:"white"}}/>
              </TouchableOpacity>
            </View>
            <View style={styles.topButtonContainer}>
              <TouchableOpacity style={[styles.topButton,{alignSelf:"center",flexDirection: "row", justifyContent: "center",alignItems: "center",}]} onPress={()=>this.setState({flash: this.state.flash == "on" ? "off" : "on"})}>
                <Image source={this.state.flash == "on" ? flashOn : flashOff} style={{resizeMode : "contain", height: 24}} />
              </TouchableOpacity>
            </View>
            <View style={styles.topButtonContainer}>
              <TouchableOpacity style={[styles.topButton,{alignSelf:"flex-end"}]}
                onPress={()=>{
                  this.props.navigation.state.params.selectFromImage();
                  this.props.navigation.goBack();
                }}>
                <Icon active name="md-image" style={{color:"white"}}/>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 0.4,
              backgroundColor: "transparent",
              flexDirection: "row",
              alignSelf: "flex-end",
            }}
          />
          <View
            style={{
              flex: 0.1,
              backgroundColor: "transparent",
              flexDirection: "row",
              alignSelf: "flex-end",
              paddingBottom: 20,
            }}
          >
            <View style={{ alignItems: "center", flex:1, paddingBottom: 60}}>
              <TouchableOpacity
                style={{ paddingBottom: 60}}
                onPress={this.takePicture}
                >
                <View style={{width:70,height:70,borderRadius:50,borderColor: "white",borderWidth: 5}} />
              </TouchableOpacity>
            </View>
          </View>
        </RNCamera>
        : null
      );
    }
  }

  render() {
    return <View style={styles.container}>{this.renderCamera()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? 0 : 10,
    backgroundColor: "#000",
  },
  topButtonContainer:{
    flex: 0.5,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 20,
    justifyContent: "center",
  },
  topButton:{
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});
