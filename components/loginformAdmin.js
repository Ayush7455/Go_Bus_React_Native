import React, { useState } from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, View } from "native-base";
import AdminBus from "../assets/images/mainimg.jpeg";
import { Alert,Image, Touchable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../firebase/firebase.config";

const LoginFormAdmin = () => {

  const navigation=useNavigation()
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const handlelogin=()=>{
    signInWithEmailAndPassword(auth,email,password).then(()=>{
      navigation.navigate("Admin")
    }).catch(error=>{
      if(email=="" && password!=""){
        Alert.alert("Email cannot be empty")
      }
      else if(password=="" && email!=""){
        Alert.alert("Password cannot be empty")
      }
      else if(password=="" || email==""){
        Alert.alert("Email and password cannot be empty")
      }
      else{
      Alert.alert("Invalid User")
  }})
  setEmail("")
  setPassword("")
  }
  return <Center w="100%" h="100%" backgroundColor={"#fff"}>
      
      <Box safeArea p="2" py="8" w="90%" maxW="290" backgroundColor="#fff">
        <View>
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
        
          Welcome Admin
        </Heading>
        
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>
        <Image source={AdminBus} style={{height:80,width:80}}/>
        </View>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input onChangeText={(text)=>setEmail(text)} value={email}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password"onChangeText={(text)=>setPassword(text)} value={password} />

            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1" onPress={()=>navigation.navigate("ForgetAdmin")}>
              Forget Password?

            </Link>
          </FormControl>
         
          <Button mt="2" bg={"#3897f0"}
          onPress={handlelogin}>
            Sign in
          </Button>
        </VStack>
      </Box>
    </Center>;
};
export default LoginFormAdmin
    