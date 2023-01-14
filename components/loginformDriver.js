import React, { useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import {Alert, View} from "react-native"
import DriverBus from "../assets/images/wcanvas.png";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getFirestore } from 'firebase/firestore';
import { app } from "../firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";


const LoginFormDriver = () => {
  const db=getFirestore(app)
  const navigation=useNavigation()
  const [busnumber,setBusNumber]=useState("")
  const [password,setPassword]=useState("")
  const LoginDriver=async()=>{
   if(busnumber=="" && password==""){
    Alert.alert("Bus Number and Password cannot be empty")
   }
   else if(busnumber=="" && password!=""){
      Alert.alert("Bus Number cannot be empty")
    }
    else if(busnumber!="" && password==""){
      Alert.alert("Password cannot be empty")
    }
  else{
     const docRef = doc(db, "Buses",busnumber);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      if(password==docSnap.data().password){
        navigation.navigate("DriverLocation",{busNumber:busnumber})
      }
      else{
        Alert.alert("Invalid User")
      }
    } else {
      Alert.alert("Invalid User")
  }
  }
  setBusNumber("")
  setPassword("")
}
  return <Center w="100%" h="100%" backgroundColor={"#fff"}>
      
  <Box safeArea p="2" py="8" w="90%" maxW="290" backgroundColor="#fff">
    <View>
    <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
    color: "warmGray.50"
  }}>
    
      Welcome Driver
    </Heading>
    
    <Heading mt="1" _dark={{
    color: "warmGray.200"
  }} color="coolGray.600" fontWeight="medium" size="xs">
      Sign in to continue!
    </Heading>
    <Image source={DriverBus} style={{height:80,width:80}}/>
    </View>
    <VStack space={3} mt="5">
      <FormControl>
        <FormControl.Label>Bus Number</FormControl.Label>
        <Input onChangeText={(text)=>setBusNumber(text)} value={busnumber}/>
      </FormControl>
      <FormControl>
        <FormControl.Label>Password</FormControl.Label>
        <Input type="password" onChangeText={(text)=>setPassword(text)} value={password}/>
      </FormControl>
      <Button mt="2" bg={"#3897f0"} onPress={LoginDriver} >
        Sign in
      </Button>
    </VStack>
  </Box>
</Center>;
};
export default LoginFormDriver
    