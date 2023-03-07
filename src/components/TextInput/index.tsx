import React from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./style";


interface Props {
    title : string,
   
}
const Input = ({title} : Props) => {
    return( 
       <View style={styles.view1}>
        {/* <Text style={styles.text2}> Name </Text>  */}
        
        <TextInput style={styles.input}
        placeholder={title} placeholderTextColor={'grey'}></TextInput>
      </View>
      )
   
}

export default Input;