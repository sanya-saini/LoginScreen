import react, {useState} from "react";
import { SafeAreaView, View,  StyleSheet, Text, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground, Alert } from "react-native";

import Textt from "./components/Text";
import Input from "./components/TextInput";
import Button from "./components/Button";

const app = () => {

  return(
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1, }}>

      <View>
      <Image style={styles.img}
        source={require("../assests/img.jpg")}>
      </Image>

      <Textt heading={'Name'} />

      <Input title={'Enter Name'} />
      <Textt heading={'Email'} /> 
      <Input title={'Enter Email'} /> 
      <Textt heading={'Password'} />
      <Input title={'Enter Password'} />

      <Button name={'Login'}/>
      
      
      </View>
      </ScrollView>

    </SafeAreaView>
  )
}
export default app;
const styles = StyleSheet.create({

  img : {
    width:"100%",
    height:"40%",
    
    marginTop:"5%",
    marginBottom:"5%",
  },
  
  view1 :{
    
    marginBottom: "3%",
    borderColor: "black",
    flexDirection: "column",
    marginHorizontal: 25,
  },
  
  
  text2:{
    color: '#AA6FF5',
    fontSize: 20,
  },
  
})

