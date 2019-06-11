import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import getTextCard from '../../../../utils/textCards'
import EmptyDeck from '../../../components/emptyDeck'
import styles from './styles'

function DeckList ({ decks, navigation }) {

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.deck}
        onPress={() => navigation.navigate('DeckDetail', {
          title: decks[item].title
        })}>
        <View style={{alignItems: 'center'}}>
          <Text style={{ fontSize: 20 }}> { decks[item].title } </Text>
          <Text style={{ fontSize: 14 }}> { getTextCard(decks[item]) } </Text>
        </View>
      </TouchableOpacity>
    )

  }

  return (
    <View style={styles.container}>
      {Object.keys(decks).length !== 0
        ? <FlatList
            data={Object.keys(decks)}
            keyExtractor={item => item}
            renderItem={renderItem}
          />
        : <EmptyDeck />
      }
    </View>
  )
}

DeckList.propTypes = {
  decks: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(
  withNavigation(DeckList)
)