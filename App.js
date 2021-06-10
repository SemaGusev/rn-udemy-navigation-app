import React, { useState } from 'react';
//import { View, Text, StyleSheet } from 'react-native'
import { AppLoading } from 'expo'
import { AppNavigation } from './src/navigation/AppNavigation'
import { bootstrap } from './src/bootstrap'

export default function App() {
  const [ isReady, setIsReady ] = useState(true)
  
  if (!isReady) {
    return <AppLoading 
    startAsync={bootstrap}
    onFinish={() => setIsReady(true)}
    onError={() => console.log(err)}
    />
  }

  return (
    <AppNavigation />
  )

  }