import { StyleSheet, Text, View,Dimensions, TextInput,  TouchableOpacity,StatusBar,ActivityIndicator} from 'react-native';
import React,{useState} from 'react';
const sw = Dimensions.get("window").width;
const sh = Dimensions.get("window").height;
import auth from '@react-native-firebase/auth';
import LottieView from 'lottie-react-native';



export default function Signupscreen({navigation}) {
const[email,setemail]=useState("");
const[password,setpassword]=useState("");
const[loading,setloading]=useState(false);



const signupprocess=()=>{
    setloading(true);
auth()
.createUserWithEmailAndPassword(email,password)
.then(() => {
    
  
  navigation.navigate("Chat");
  setloading(false);
})
.catch(error => {
  if (error.code === 'auth/email-already-in-use') {
    console.log('That email address is already in use!');
  }

  if (error.code === 'auth/invalid-email') {
    console.log('That email address is invalid!');
  }

  console.error(error);
});

}



  return (
    <View style={styles.body}>
        <StatusBar backgroundColor={"#015B36"}/>
        <View style={styles.logincontiner}>
        <View style={styles.logocontiner}>
            <View style={styles.loginlogo}>
                <LottieView source={require("../assets/login.json")} autoPlay={true} loop={true} resizeMode={"contain"} style={{width:150,height:150}}/>
                </View>
                <Text style={styles.logintext}>SIGNUP</Text>


            </View>
          
            <Text style={styles.titletext}>Email :</Text>
            <TextInput placeholder='Enter email' style={styles.textinput1} placeholderTextColor={"#000"}
             onChangeText={text=>setemail(text)}/>
            <Text style={styles.titletext}>Password :</Text>
            <TextInput placeholder='Enter password' style={styles.textinput1}placeholderTextColor={"#000"}
            onChangeText={text=>setpassword(text)}
            />
            <View style={styles.buttoncontiner}>
                <TouchableOpacity style={styles.loginbutton} onPress={signupprocess}>
                {
                        loading ? <ActivityIndicator size={"small"} color={"#000"}/>: <Text style={styles.titletext}>SIGNUP</Text> 
                    }
                </TouchableOpacity>



            </View>
            <View  style={styles.buttoncontiner}>
                <Text style={styles.titletext}>if yoy have account already ?</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
                <Text style={styles.signuptext}>login</Text>
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
    },
    loginlogo:{
        width:150,
        height:100,
        
        borderRadius:100,
        
        
       
    },
    logocontiner:{

        justifyContent:"center",
        alignItems: "center",
        width:"100%",
        
    },
   
})