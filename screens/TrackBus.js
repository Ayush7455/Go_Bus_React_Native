import React, {  useRef, useState } from "react";
import {Text,StatusBar, TextInput, TouchableOpacity, Alert} from "react-native"
import MapView,{Marker} from "react-native-maps";
import { getFirestore } from 'firebase/firestore';
import { app } from "../firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";
const MapStyle=[
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8ec3b9"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1a3646"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#4b6878"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#64779e"
        }
      ]
    },
    {
      "featureType": "administrative.province",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#4b6878"
        }
      ]
    },
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#334e87"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#283d6a"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6f9ba5"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3C7680"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#304a7d"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#98a5be"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2c6675"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#255763"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#b0d5ce"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#98a5be"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#283d6a"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3a4762"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#0e1626"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#4e6d70"
        }
      ]
    }
  ]
const TrackBus=()=>{
    const db=getFirestore(app)
    const mapRef=useRef(null)
    const [markerTitle, setMarkerTitle] = useState("Marker in SanFrancisco");
    const [position,setPosition]=useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    })
    const [busnumber,setBusNumber]=useState("")
    const SearchBus=async()=>{
        const docRef = doc(db, "Drivers",busnumber);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setMarkerTitle(busnumber);
           setPosition({
            latitude:docSnap.data().latitude,
            longitude:docSnap.data().longitude
           })
           mapRef.current.animateToRegion({
            latitude: docSnap.data().latitude,
            longitude: docSnap.data().longitude,
            latitudeDelta:  0.01,
            longitudeDelta:  0.01,
          }, 1000);
           
          } else {
           Alert.alert("No bus found with entered Bus Number")
        }
    }
    return(
        <>
        <StatusBar barStyle={"light-content"}
        backgroundColor="black"/>
       <TextInput placeholder="Search Bus" placeholderTextColor={"#fff"} color={"#fff"} onChangeText={(text)=>setBusNumber(text)} style={{height:40,backgroundColor:"black"}}></TextInput>
      <TouchableOpacity style={{width:"100%",height:40,backgroundColor:"black",alignItems:"center",justifyContent:"center"}} onPress={SearchBus}>
        <Text style={{textAlign:"center",color:"#fff"}}>Search</Text>
      </TouchableOpacity>
            <MapView
            customMapStyle={MapStyle}
            ref={mapRef}
      style={{ flex: 1,width:"100%"}}
      initialRegion={position}
    >
    <Marker key={`${position.latitude},${position.longitude}`} coordinate={position} title={markerTitle}/>
    </MapView>

    </>
    )
}
export default TrackBus