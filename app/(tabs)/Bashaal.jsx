import { StyleSheet, Text, View, Switch, ToastAndroid, ScrollView, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import Toast from 'react-native'

export default function Bashaal() {
    const [location, setlocation] = useState(false)
    const [mic, setmic] = useState(false)
    const [storage, setstorage] = useState(false)

    const SwitchLoaction =()=>{
        setlocation(!location)
    }
    const SwitchMic =()=>{
        setmic(!mic)
    }
    const SwitchStorage =()=>{
        setstorage(!storage)
    }


  return (

    <ScrollView>
           <View  style={styles.baashaal}>
          <View style={styles.contianer}>
        <Text style={styles.Text}>Location is : {location ? 'On' : 'Off'}</Text>
     <Switch 
     trackColor={{false:'red', true:'green'}}
     thumbColor={"black"}
     value={location}
     onValueChange={SwitchLoaction}
     />

    </View>
    <View style={styles.contianer}>
        <Text style={styles.Text}>Storage is : {storage ? 'On' : 'Off'}</Text>
     <Switch 
     trackColor={{false:'red', true:'green'}}
     thumbColor={"black"}
     value={storage}
     onValueChange={SwitchStorage}
     />

    </View>
    <View style={styles.contianer}>
        <Text style={styles.Text}>Mic is : {mic ? 'On' : 'Off'}</Text>
     <Switch 
     trackColor={{false:'red', true:'green'}}
     thumbColor={"black"}
     value={mic}
     onValueChange={SwitchMic}
     />

    </View>
    <Button 
    title='Show toasts'
    onPress={()=> ToastAndroid.show('Submited Successfully', ToastAndroid.SHORT)} 
    
    />
    </View>
    </ScrollView>
 
  
    
    
  )
}

const styles = StyleSheet.create({
    baashaal:{
        flex:1,
        backgroundColor:'#25292E'  //background color for the whole screen
    },
    contianer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#616C6F'  //background color for the screen
    },
  
    Text:{
        fontSize:20,
        color:'#fff',
        marginBottom:10
    }
 
})