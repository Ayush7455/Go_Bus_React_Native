import React, { useState } from "react";
import { Box, Text,Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import Bus from "../assets/images/mainimg.jpeg"
import { Image,View,Alert} from "react-native";
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc } from "firebase/firestore"; 
import { app } from "../firebase/firebase.config";
const AddBusForm=()=>{
  const db=getFirestore(app)
  const [busnumber,setBusNumber]=useState("")
  const [drivername,setDriverName]=useState("")
  const [licensenumber,setLicenseNumber]=useState("")
  const [password,setPassword]=useState("")
  const addbus=()=>{
    setDoc(doc(db, "Buses", busnumber), {
    Drivername: drivername,
    Licensenumber: licensenumber,
    busnumber: busnumber,
    password:password,
  }).then(()=>{
    Alert.alert(`${busnumber} Registered for tracking`)

  }).catch((error)=>{
    Alert.alert(error.message)
  })
}

    return (
      
        <Center w="100%" h="100%" backgroundColor={"#fff"}>
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <View>
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Add Bus
        </Heading>
        <Image source={Bus} style={{height:80,width:80}}/>
        </View>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Bus Number</FormControl.Label>
            <Input onChangeText={(text)=>setBusNumber(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Drive Name</FormControl.Label>
            <Input onChangeText={(text)=>setDriverName(text)}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>License Number</FormControl.Label>
            <Input onChangeText={(text)=>setLicenseNumber(text)}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" onChangeText={(text)=>setPassword(text)} />
          </FormControl>
          <Button mt="2"  bg={"#3897f0"} onPress={addbus}>
         Add
          </Button>
        </VStack>
      </Box>
    </Center>
    )
}
export default AddBusForm