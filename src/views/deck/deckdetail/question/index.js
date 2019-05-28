import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { purple, white } from '../../../../../utils/colors'

export default Question = props => {

  const { questions } = props

  return (
    <View>
    { questions.map( (question, index) => (
      <View style={styles.question} key={index}>
        <View>
          <Text style={{ color: purple }}>Question: </Text> 
          <Text style={{ fontSize: 15 }}> { question.question } </Text>
          
          <View style={{flex: 1, flexDirection: 'row', marginTop: 10, marginBottom: 10, alignItems: 'center'}}>
            <View style={{backgroundColor: '#eee', height: 1, flex: 1, alignSelf: 'center', marginTop: 10, marginBottom: 10 }} />
          </View>
          
          <Text style={{ color: purple }}>Answer: </Text> 
          <Text style={{ fontSize: 15 }}> { question.answer } </Text>
          <View style={{ marginTop: 20, alignItems: 'center' }}>
            <TouchableOpacity style={{color: '#00FF44'}}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ))}
    </View>
  )
}

const styles = StyleSheet.create({
  question: {
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
    marginBottom: 5,
    marginLeft: 10,
    padding: 20,
    marginBottom: 16,
    backgroundColor: white,
    borderRadius: 3,
    minHeight: 60,
    elevation: 4,
    shadowColor: '#ddd',
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
})