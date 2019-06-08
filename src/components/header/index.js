import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function Header ({ title, subtitle, fontSize = 30 }) {
  return (
    <View style={styles.container}>
        <Text style={[styles.title, { fontSize }]}>
          {title}
        </Text>
        { subtitle &&
          <Text style={styles.subtitle}>
            {subtitle}
          </Text>
        }
    </View>
  )
}