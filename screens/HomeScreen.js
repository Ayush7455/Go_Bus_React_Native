import React from "react";
import {Image, StatusBar, Text,View} from "react-native";
import { Button,Box } from "native-base";
import Main from "../assets/images/main.png";
import { useNavigation } from "@react-navigation/native";

const HomeScreen=()=>{

    const navigation=useNavigation();
    return (
        <>
        <StatusBar barStyle={"dark-content"}
        backgroundColor="#fff"/>
        <View style={{alignItems:"center",justifyContent:"center",backgroundColor:"#009377"
    }}>
       
            <View style={{height:"45%",width:"100%",alignItems:"center",justifyContent:"center",borderBottomStartRadius:20,borderBottomEndRadius:20,backgroundColor:"white"}}>
            <Image
  style={{width: '100%', height: 200,resizeMode : 'contain' }}
         source={Main}  
         />
            </View>
            <View style={{height:"60%",width:"100%",backgroundColor:"#009377"}}>
            <Text style={{textAlign:"center",marginTop:45,color:"white",fontSize:25,fontWeight:"bold"}}>Start Tracking</Text>
            <Text style={{textAlign:"center",marginTop:40,color:"#ABE0D5"}}>Track any bus in India{'\n'}by simple authentication</Text>
            <Box style={{alignItems:"center"}}>
            <Button  bg={"#ffAB30"}_text={{
color:"black",
}} style={{width:120,marginTop:50}} onPress={()=>navigation.navigate("DriverLogin")}>Driver Login</Button>
            <Button bg={"#ffAB30"} _text={{
color:"black",
}} style={{width:120,marginTop:30}} onPress={()=>navigation.navigate("AdminLogin")} >Admin Login</Button>
            </Box>

            </View>
        </View>
        </>
    )
}
export default HomeScreen