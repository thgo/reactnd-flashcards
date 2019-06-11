import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './styles'

export default function TitleDivider ({ title }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftLine} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          { title }
        </Text>
      </View>

      <View style={styles.rightLine} />
    </View>
  )
}

TitleDivider.propTypes = {
  title: PropTypes.string.isRequired
}