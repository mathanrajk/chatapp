import { StyleSheet, Text, View,Dimensions, TextInput,  TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
const sw = Dimensions.get("window").width;
const sh = Dimensions.get("window").height;
import auth from '@react-native-firebase/auth';


export default function Loginscreen({navigation}) {
const[email,setemail]=useState("");
const[password,setpassword]=useState("");



const loginprocess=()=>{
    auth()
.signInWithEmailAndPassword(email,password)
.then(() => {
  
   

 
    navigation.navigate("Chat");
     

})
.catch(error => {
  

  console.error(error);
});
   

}



  return (
    <View style={styles.body}>
        <View style={styles.logincontiner}>
            <Text style={styles.logintext}>LOGIN</Text>
            <Text style={styles.titletext}>Email :</Text>
            <TextInput placeholder='Enter email' style={styles.textinput1} placeholderTextColor={"#000"}
             onChangeText={text=>setemail(text)}/>
            <Text style={styles.titletext}>Password :</Text>
            <TextInput placeholder='Enter password' style={styles.textinput1}placeholderTextColor={"#000"}
            onChangeText={text=>setpassword(text)}
            />
            <View style={styles.buttoncontiner}>
                <TouchableOpacity style={styles.loginbutton} onPress={loginprocess}>
                    <Text style={styles.titletext}>LOGIN</Text>
                </TouchableOpacity>



            </View>
            <View  style={styles.buttoncontiner}>
                <Text style={styles.titletext}>Need to create account ?</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate("Signup")}}>
                <Text style={styles.signuptext}>signup</Text>
                </TouchableOpacity>

            </View>


        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#aaa"

    },
    logincontiner:{
        backgroundColor:"#fff",
        width:sw/1.1,
        height:sh/1.5,
        borderRadius:20,
        elevation:20,
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        overflow:"hidden",
        padding:10
        
        
    },
    logintext:{
        fontSize:20,
        fontWeight:"bold",
        color:"#000"
    },
    textinput1:{
        borderWidth:2,
        borderColor:"#000",
        borderRadius:20,
        width:"100%",
        marginVertical:10,
        paddingLeft:10,
        color:"#000"

    },
    buttoncontiner:{
        height:50,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    loginbutton:{
        backgroundColor:"skyblue",
        padding:10,
        paddingHorizontal:50,
        borderRadius:20,

    },
    titletext:{
        color:"#000",
        fontWeight:"bold",

    },
    signuptext:{
        color:"blue",
        marginLeft:5,
        textDecorationLine:"underline"
    }
})