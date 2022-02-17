import { StatusBar } from 'expo-status-bar';
import { Button, Alert, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, SafeAreaView } from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import React from 'react';
import { useState, useEffect } from 'react';


/*
View vs SafeAreaVuew
SafeAreaView - adds padding to top (for notch)
*/

/*
Text
- numberOfLines - set explicit number of lines
- onPress - do a function on press
*/

/*
Image
source={require('...')} - for rendering local or static images
source={{width: ..., height: ..., uri: "url"}} - for rendering online images
* PREFERENCE * - use network images when possible, otherwise size of app increases
- Exception to above: something that has to ship with the app, like its logo
Image properties:
blurRadius={number} - for blurring
loadingIndicatorSource - placeholder
fadeDuration - ANDROID ONLY
resizeMode - IMPORTANT
*/

/*
Touchables
- Anything can made touchable
Touchable types
- TouchableHighlight - on press down, item darkens
- TouchableOpacity - on press down, opacity decreases, dimming object
- TouchableWithoutFeedback - do NOT use unless you have a good reason
- TouchableNativeFeedback - NOT SUPPORTED ON iOS - iOS alternative is TouchableOpacity? 
*/

/*
Buttons
iOS - text
Android - text + button iconm
*/
export default function App() {
  const [theTime, setTheTime] = useState("");

  useEffect(async () => {
    const response = await fetch('https://api.nhtsa.gov/complaints/complaintsByVehicle?make=acura&model=rdx&modelYear=2012');
    const data = await response.json();
    setTheTime(data.count)
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textColor}>Tervetuloa</Text>
      <Text style={styles.textColor} onPress={() => console.log("suomi")}>We sdsDare using Native</Text>
      <TouchableOpacity onPress={() => console.log("suomi!")}>
        <Image blurRadius={3} source={require('./resources/download.png')} />

      </TouchableOpacity>
      <Text>The time is: {theTime}</Text>
      <TouchableHighlight onPress={() => console.log("touchable highlight!")}>
        <Image source={{
          width: 100,
          height: 100,
          uri: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/R3QCUUHISFLJNPS4SH3UQBUEE4.jpg"
        }} />
      </TouchableHighlight>
        <Button title="Click Here" onPress={() => Alert.alert("Attention", "If you made it this far, it is because Brandon Yau doubts my development skills.",
        [{text: "I agree"}, {text: "I also agree"}])}></Button>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BA0C2F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: '#FFFFFF',
  }
});
