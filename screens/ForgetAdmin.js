import React from "react";
import {StatusBar, Text,View} from "react-native";
import ForgetForm from "../components/ForgetForm";
const ForgetAdmin=()=>{

    return(
        <>
        <StatusBar barStyle={"dark-content"}
        backgroundColor="#fff"/>
        <View style={{alignItems:"center",justifyContent:"center"}}>
        <ForgetForm/>
        </View>
        </>
    )
}
export default ForgetAdmin