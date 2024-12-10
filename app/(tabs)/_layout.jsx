import React from 'react'
import { Tabs } from 'expo-router'
import {Ionicons} from '@expo/vector-icons'

export default function tabslayout() {
  return (
    <Tabs
    screenOptions={{
        tabBarStyle: { backgroundColor: '#192A56' },
        tabBarActiveTintColor: '#45CE30',
        tabBarInactiveTintColor: '#43BE31',
  
    }}
    >
      <Tabs.Screen name='index' options={{headerTitle:"Home",
        tabBarIcon: ()=> <Ionicons name='home' size={30} />,
      }} />
      <Tabs.Screen name='about'
       options={{headerTitle:"About",
       tabBarIcon : ()=> 
        
        <Ionicons name='search' size={30} />,
       }} />
       <Tabs.Screen name='Bashaal'
                    
                    options={{headerTitle: "Bashaal",
                      tabBarIcon: ()=> <Ionicons name='settings' size={30}/>
                    }} 
                   />
    </Tabs>
  )
}