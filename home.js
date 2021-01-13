import React, { Component } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {View,Text, Button} from "react-native"
export default class Home extends Component {
    selectImage=()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
    }
  render() {
    return (
      <View>
          <Text>dfjjl</Text>
          <Button onPress={this.selectImage} title="Select Image"/>
      </View>
    );
  }
}
