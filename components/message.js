import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Message(props) {
  console.log(props.owner)


  return (
    <View style={styles.body}>
      <Text style={styles.textmessage}>{props.message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    body:{
        backgroundColor:"green",
        paddingHorizontal:10,
        marginVertical:10,
        borderTopEndRadius:10,
        borderBottomEndRadius:10,
        borderTopLeftRadius:10,
        paddingVertical:10
       
    },
    textmessage:{
        fontSize:17
    }
})