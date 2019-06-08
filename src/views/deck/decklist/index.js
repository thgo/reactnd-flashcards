import React, { Component } from 'react'
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

class DeckList extends Component {

  renderItem = ({ item }) => {
    const { decks, navigation } = this.props

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

  render () {
    const { decks } = this.props

    console.log(decks)

    return (
      <View style={styles.container}>
        {Object.keys(decks).length !== 0
          ? <FlatList
              data={Object.keys(decks)}
              keyExtractor={item => item}
              renderItem={this.renderItem}
            />
          : <EmptyDeck />
        }
      </View>
    )
  }
}

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(
  withNavigation(DeckList)
)