import React from 'react'
import { View, Text } from 'react-native'

export default function EmptyDeck() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Nenhum card cadastrado.</Text>
    </View>
  )
}