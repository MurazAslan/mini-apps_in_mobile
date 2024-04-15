import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Header } from '../components/Header'

export const MusicScreen:React.FC = () => {
  return (
    <View style={styles.root}>
      <Header title='Ophelia by Steven'
       />
      
    </View>
  )
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 1,
        
    }
})