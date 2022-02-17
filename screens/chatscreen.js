import { StyleSheet, Text, View ,FlatList,ActivityIndicator, ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react';
import firestore from "@react-native-firebase/firestore";
import Messageinput from '../components/messageinput';
import Message from '../components/message';
import auth from '@react-native-firebase/auth';


export default function Chatscreen() {
    
 
    const current= auth().currentUser.email
    console.log("this message from chatscreen",current)
    



  

   



 const[messages,setmessages]=useState([]); 
 const[loading,setloading]=useState(true);
 const roomname="chatroom"
 


 
 useEffect(()=>{
     const unsubscribe = firestore().collection(roomname).onSnapshot(datae=>{
         const messagedata=[]
         datae.forEach(datas=>{
             messagedata.push({
                 id:datas.id,
                 value:datas.data().message,
                userids:datas.data().userid
                 
             });


         });
         setmessages(messagedata)
         setloading(false)
     })
     return ()=>unsubscribe();

 },[])


 
 




const addmessage=(message)=>{




    console.log(message)
    if(message){
        firestore().collection(roomname).doc(new Date().toString()).set(
         {message:message,
          userid:current
         
         }
        
        )
    }

};

if(loading){

    return(
        <ActivityIndicator size={"large"} style={styles.indicator}/>
    )
}

else{

  return (
    <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}  >
       
      
   {
       messages.map((data,index)=>
      

     

       <Message message={data.value} key={index}  owner={current===data.userids}/>
    
        
     
       )
   }
  </ScrollView>
      <Messageinput onsentdata={addmessage}/>
    </View>
  )
}
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"flex-start",
        padding:5
    }
})