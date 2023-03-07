import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

interface Props {
    heading : string,
}
const Textt = ({heading} : Props) => {
    return( 
        <View style={styles.view1}>
        <Text style={styles.text2}> {heading} </Text>
        </View>
      )
   
}

export default Textt;

