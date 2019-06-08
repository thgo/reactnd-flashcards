import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { purple, red } from '../../../../utils/colors'
import styles from './styles'

export default function Question ({ question, handleDeleteCard }) {

  deleteCard = (question) => {
    handleDeleteCard(question)
  }

  return (
    <View style={{flex: 1}}>
      <Text style={{ color: purple }}>
        Question:
      </Text>
      <Text style={{ fontSize: 15 }}>
        { question.question }
      </Text>

      <View style={styles.containerSeparator}>
        <View style={styles.lineSeparator} />
      </View>

      <Text style={{ color: purple }}>
        Answer:
      </Text>
      <Text style={{ fontSize: 15 }}>
        { question.answer }
      </Text>
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => deleteCard(question)}
          style={styles.deleteBtn}
        >
          <Ionicons
            name='md-trash'
            size={25}
            color={red}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}