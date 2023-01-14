import React from "react";
import {View,Text,Image, TouchableOpacity, StatusBar} from "react-native";
import { Button,Box } from "native-base";
import AdminMain from "../assets/images/adminmain.png"
import Bus from "../assets/images/bus.png"
import Track from "../assets/images/track.png"
import { useNavigation } from "@react-navigation/native";
const Admin=()=>{
    const navigation=useNavigation()

    return(
        <>
        <StatusBar barStyle={"dark-content"} backgroundColor="#fff"/>
        <View style={{alignItems:"center",justifyContent:"center",backgroundColor:"#009377"
    }}>
       
            <View style={{height:"45%",width:"100%",alignItems:"center",justifyContent:"center",borderBottomStartRadius:20,borderBottomEndRadius:20,backgroundColor:"white"}}>
            <Image
  style={{width: '100%', height: 300,resizeMode : 'contain' }}
         source={AdminMain}  
         />
            </View>
            <View style={{height:"60%",width:"100%",backgroundColor:"#009377"}}>
            <Text style={{textAlign:"center",marginTop:45,color:"white",fontSize:35,fontWeight:"bold"}}>Admin Portal</Text>
            <Box style={{alignItems:"center"}}>
            <TouchableOpacity style={{marginTop:40,backgroundColor:"#ffAB30",height:90,width:"85%",justifyContent:"center",padding:20,elevation:2,borderRadius:10}} onPress={()=>navigation.navigate("AddBus")}>
                <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
                <Text style={{color:"#fff",fontSize:30,fontWeight:"bold"}}>Add Bus</Text>
                <Image source={Track} style={{height:80,width:80}}></Image>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:30,backgroundColor:"#ffAB30",height:90,width:"85%",justifyContent:"center",padding:20,elevation:2,borderRadius:10}} onPress={()=>navigation.navigate("TrackBus")}>
                <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
                <Text style={{color:"#fff",fontSize:30,fontWeight:"bold"}}>Track Bus</Text>
                <Image source={Bus} style={{height:100,width:100}}></Image>
                </View>
            </TouchableOpacity>
            </Box>

            </View>
        </View>
        </>
    )
}
export default Admin