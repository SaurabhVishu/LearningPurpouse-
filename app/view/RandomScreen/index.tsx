import React from "react";
import {View,Text, SafeAreaView} from "react-native"
import {WebView} from "react-native-webview"


import styles from "./style";


 interface RandomScreenProps{
    navigation:any
}


const RandomScreen=(props:RandomScreenProps)=>{
    const{navigation}=props
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{backgroundColor:"red"}}>
               
            </View>
            <View style={styles.mainContainer}>
            <WebView
        source={{
          uri: 'https://www.w3schools.com'
        }}
      />
            </View>
        </SafeAreaView>
    )
}
export default RandomScreen


