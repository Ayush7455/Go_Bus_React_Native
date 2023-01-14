import React from "react";
import {StatusBar, Text,View} from "react-native";
import LoginFormDriver from "../components/loginformDriver";
const DriverLogin=()=>{


    return(
        <>
        <StatusBar barStyle={"dark-content"}
        backgroundColor="#fff"/>
        <View style={{alignItems:"center",justifyContent:"center"}}>
        <LoginFormDriver/>
        </View>
        </>
    )
}
export default DriverLogin