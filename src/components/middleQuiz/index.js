import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { purple } from '../../../utils/colors'

export default function MiddleQuiz ({ cardTitle, cardText }) {
  return (
    <View
      style={{flex: 3, alignItems: 'center'}}>
      <View
        style={{paddingVertical: 10}}>
        <Text style={{fontSize: 24, color: purple}}>
          { cardTitle }
        </Text>
      </View>
      <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
        <Text style={{fontSize: 18, textAlign: 'justify'}}>
          { cardText }
        </Text>
      </ScrollView>
    </View>
  )
}

MiddleQuiz.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired
}