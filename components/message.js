import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Message(props) {



  return (
    <View style={[styles.body ,props.owner ?{justifyContent:"flex-end",alignItems:"flex-end"}:{justifyContent:"flex-start",alignItems:"flex-start"}]}>
      <View style={[props.owner ?styles.leftside:styles.rightside]}>
       <Text style={styles.username}>{props.username}</Text>
      <Text style={styles.textmessage}>{props.message}</Text>
      <View style={styles.timecontainer}>  
        <Text style={styles.timetext}>{props.time}</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    body:{
     
        width:"100%",
        flexDirection:"row",
        transform: [{ rotate: '180deg'}]
        

    },

    leftside:{
      backgroundColor:"#0CB074",
      paddingHorizontal:10,
      marginVertical:10,
      paddingVertical:10,
      borderTopEndRadius:10,
      borderTopStartRadius:10,
      borderBottomLeftRadius:30,
      marginHorizontal:10, 
      elevation:10,
     
      




    },
    rightside:{
      backgroundColor:"#408050",
      marginVertical:10,
      paddingHorizontal:10,
      paddingVertical:10,
      borderTopEndRadius:10,
      borderTopStartRadius:10,
      borderBottomRightRadius:30,
      marginHorizontal:10,
      elevation:10,




    

    },

    textmessage:{
        fontSize:17,
        color:"#fff"
    },
    username:{
      fontSize:10
    },
    timetext:{
      fontSize:12
    },
    timecontainer:{
      flexDirection:"row",
      justifyContent:"flex-end",
      alignItems:"flex-end"

    }
})