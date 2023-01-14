import React from "react";
import {StatusBar, Text,View} from "react-native";
import AddBusForm from "../components/AddBusForm";
import Bus from "../assets/images/mainimg.jpeg"
const AddBus=()=>{

    return(
        <>
        <StatusBar barStyle={"dark-content"}
        backgroundColor="#fff"/>
        <View style={{alignItems:"center",justifyContent:"center"}}>
        <AddBusForm/>
        </View>
        </>
        
    )
}
export default AddBus