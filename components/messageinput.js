import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import Icons from "react-native-vector-icons/MaterialIcons";
import propTypes from 'prop-types';



export default function Messageinput({onsentdata}) {

const[message,setmessage]=useState("");

const sentingmessage=()=>{
    if(message){
        onsentdata(message)
      

        setmessage("")
    }

}

  return (
    <View style={styles.messageinputcontiner}>
      
        <View style={styles.textbox}>
            <TextInput placeholder='Type message...' placeholderTextColor={"gray"} color={"#000"} multiline={true}
            onChangeText={(text)=>setmessage(text)}
            onEndEditing={sentingmessage}
            value={message}
            style={styles.textinput}
            />
           
       
        </View>
        <TouchableOpacity style={styles.sentbutton} onPress={sentingmessage}>
            <View>
        <Icons name={"send"} size={30} color={"green"}/>
        </View>
        </TouchableOpacity>
    
    </View>
  )
}

const styles = StyleSheet.create({
    messageinputcontiner:{
        flexDirection:"row",
        backgroundColor:"#fff",
        width:"95%",
        
        borderRadius:15,
        elevation:9,
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:5,
        marginHorizontal:10,
        transform: [{ rotate: '180deg'}],
        marginTop:10,
       
       

        
      
    },
    textbox:{
      paddingLeft:10,
      width:"80%",
     
     

    },
    sentbutton:{
        width:50,
height:50,
backgroundColor:"#fff",
borderRadius:50,
justifyContent:"center",
alignItems:"center"
    },
    textinput:{
        fontSize:17
    }
})