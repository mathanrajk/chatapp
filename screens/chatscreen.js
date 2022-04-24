import { StyleSheet,StatusBar, View ,FlatList,ActivityIndicator, ScrollView, ImageBackground, KeyboardAvoidingView} from 'react-native'
import React,{useState,useEffect} from 'react';
import firestore from "@react-native-firebase/firestore";
import Messageinput from '../components/messageinput';
import Message from '../components/message';
import auth from '@react-native-firebase/auth';
import moment from 'moment';
import Appbar from '../components/appbar';


export default function Chatscreen({navigation}) {
    
 
    const current= auth().currentUser.email
    
    const time =moment().format('LT');
    
   
    



  

   



 const[messages,setmessages]=useState([]); 
 const[loading,setloading]=useState(true);
 const roomname="chatroom";
 


 
 useEffect(()=>{
     
    const unsubscribe = firestore().collection(roomname).onSnapshot(datae=>{
        const messagedata=[]
        datae.forEach(datas=>{
            messagedata.push({
                id:datas.id,
                value:datas.data().message,
               userids:datas.data().userid,
               timee:datas.data().times
                
            });


        });
        setmessages(messagedata.reverse())
        setloading(false)
    })
    return ()=>unsubscribe();

},[])


 const signout=()=>{
        
    auth()
    .signOut()
    .then(() => console.log('User signed out!'),
    navigation.navigate("Login")
    
    );


}


 
 




const addmessage=(message)=>{




    console.log(message)
    if(message){
        firestore().collection(roomname).doc(new Date().toString()).set(
         {message:message,
          userid:current,
          times:time
         
         }
        
        )
    }

};



const flatlistItem=(itemdata)=>{
    return<View>
<Message message={itemdata.item.value}   owner={current===itemdata.item.userids} username={itemdata.item.userids} time={itemdata.item.timee}/>

    </View>


}

if(loading){

    return(
       <ActivityIndicator size={"large"} style={styles.indicator}/>
   )
}

else{

  return (
    <View style={styles.body}>
        <StatusBar backgroundColor={"#015B36"}/>
        <ImageBackground source={{uri:"https://i.pinimg.com/550x/45/ce/c7/45cec757faf8d07318cc829dcf21c697.jpg"}} style={{width:"100%", height:"100%",transform: [{ rotate: '180deg'}]}} >
        <Messageinput onsentdata={addmessage}/>
      <FlatList
      data={messages}
      renderItem={flatlistItem}
      
 
      
   
      


      
      /> 
      
  

      <Appbar signout={signout} appname={roomname}/>
      </ImageBackground>
    </View>
 )
}
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"flex-start",
        
        
    }
})