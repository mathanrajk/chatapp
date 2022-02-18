import { StyleSheet, Text, View ,TouchableOpacity,} from 'react-native'
import React from 'react'
import Icons from "react-native-vector-icons/MaterialCommunityIcons"


export default function Appbar(props) {
   
  return (
    <View style={styles.body}>
         <Text style={styles.appname}>{props.appname}</Text>
        <View style={styles.icon}>
            <TouchableOpacity onPress={props.signout}>
           
            <Icons name="logout" size={40} color={"#000"}/>
            </TouchableOpacity>
        </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    body:{
        transform: [{ rotate: '180deg'}],
        width:"100%",
        height:49,
        backgroundColor:"#015B36",
        elevation:30,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:10,

        
    },
    appname:{
        fontSize:20,
        color:"#fff"
    },
    icon:{

    }
})