import React from "react";
import {StatusBar, Text,View} from "react-native";
import LoginFormAdmin from "../components/loginformAdmin";
const AdminLogin=()=>{


    return(
        <>
        <StatusBar barStyle={"dark-content"}
        backgroundColor="#fff"/>
        <View style={{alignItems:"center",justifyContent:"center"}}>
        <LoginFormAdmin/>
        </View>
        </>
    )
}
export default AdminLogin