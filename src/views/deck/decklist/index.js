import React, { Component } from 'react'
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native'
import { connect } from 'react-redux'
import { Entypo } from '@expo/vector-icons'
import { FloatingAction } from 'react-native-floating-action'
import { withNavigation } from 'react-navigation'
import { white, purple } from '../../../../utils/colors'

const actions = [{
  text: 'Add Deck',
  icon: <Entypo name='documents' size={30} color={white} />,
  name: 'bt_accessibility',
  color: purple,
  position: 1,
}]

class DeckList extends Component {

  renderItem = ({ item }) => {

    const { decks, navigation } = this.props

    return (
      <TouchableOpacity 
        style={styles.deck}
        onPress={() => navigation.navigate('DeckDetail')}>
        <View >
          <Text style={{ fontSize: 20 }}> { decks[item].title } </Text>
          <Text style={{ fontSize: 14 }}> { decks[item].questions.length } Cards </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render () {

    const { navigation, decks } = this.props

    return (
      <View style={styles.container}>
        {decks !== null 
          ? <FlatList
              data={Object.keys(decks)}
              keyExtractor={item => item}
              renderItem={this.renderItem}
            />
          : <Text>Nada retornado</Text>
        }

      <FloatingAction 
        style={styles.action}
        //actions={actions}
        color={purple}
        showBackground={false}
        animated={false}
        onPressMain={() => navigation.navigate('NewDeck')}
        //onPressItem={() => navigation.navigate('NewDeck')}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  deck: {
    backgroundColor: white,
    borderRadius: 5,
    height: 100,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 5,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  action: {
    alignSelf: 'flex-end'
  }
})

function mapStateToProps({ decks }) {

  console.log('DECK LIST, ', decks )

  return {
    decks
  }
}

export default withNavigation(
  connect(mapStateToProps)(DeckList)
)

