import React, { Component } from "react";
import {View,Platform} from "react-native";
import CameraScreenBase from "./CameraKitCameraScreenBase";

export default class CameraScreen extends CameraScreenBase {

  renderGap() {
    return (
      <View style={{flex: 10, flexDirection: "column"}}/>
    );
  }

  render() {
    return (
      <View style={[{flex: 1}, Platform.OS === "android" ? { backgroundColor: "transparent", paddingTop:40 } : {backgroundColor : "black"}]} {...this.props}>
        {Platform.OS === "android" ? this.renderCamera() : this.renderTopButtons() }
        {Platform.OS === "android" ? this.renderTopButtons() : this.renderCamera() }
        {Platform.OS === "android" ? this.renderGap() : this.renderRatioStrip()}
        {this.renderBottomButtons()}
      </View>
    );
  }
}


