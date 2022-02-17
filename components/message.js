import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Message(props) {
  console.log("this form message",JSON.stringify(props.owner))


  return (
    <View style={[styles.body ,props.owner ?{justifyContent:"flex-end",alignItems:"flex-end"}:{justifyContent:"flex-start",alignItems:"flex-start"}]}>
      <View style={[props.owner ?styles.leftside:styles.rightside]}>
      <Text style={styles.textmessage}>{props.message}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    body:{
     
        width:"100%",
        flexDirection:"row"
    },

    leftside:{
      backgroundColor:"red",
      paddingHorizontal:10,
      marginVertical:10,
      paddingVertical:10,
      borderTopEndRadius:10,
      borderTopStartRadius:10,
      borderBottomLeftRadius:10


    },
    rightside:{
      backgroundColor:"green",
      marginVertical:10,
      paddingHorizontal:10,
      paddingVertical:10,
      borderTopEndRadius:10,
      borderTopStartRadius:10,
      borderBottomRightRadius:10




    

    },

    textmessage:{
        fontSize:17
    }
})