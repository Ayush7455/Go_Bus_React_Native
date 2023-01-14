import React, { useState } from "react";
import { Box, Text,Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import Bus from "../assets/images/mainimg.jpeg"
import { Alert, Image,View } from "react-native";

import {sendPasswordResetEmail} from "firebase/auth"
import { auth } from "../firebase/firebase.config";
const ForgetForm=()=>{
  const [email,setEmail]=useState("")
  const ResetPass=()=>{
      if(email!=""){
        sendPasswordResetEmail(auth,email).then(()=>{
          Alert.alert("Check your Email")
        })
        .catch((error)=>{
          Alert.alert("You are not an Admin")
        })
      }
      else{
        Alert.alert("Email cannot be empty")
      }
      setEmail("")
  }
    return (
        <Center w="100%" h="100%" backgroundColor={"#fff"}>
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <View>
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Reset Password
        </Heading>
        <Image source={Bus} style={{height:80,width:80}}/>
        </View>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input onChangeText={(text)=>setEmail(text)} value={email}/>
          </FormControl>
          <Button mt="2"  bg={"#3897f0"} onPress={ResetPass}>
         Reset
          </Button>
        </VStack>
      </Box>
    </Center>
    )
}
export default ForgetForm