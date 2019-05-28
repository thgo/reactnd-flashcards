import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { FloatingAction } from 'react-native-floating-action'
import { purple, white } from '../../../../utils/colors'
import { MaterialIcons } from '@expo/vector-icons'
import Header from '../../header'
import { deleteDeckAPI } from '../../../services/api'
import { deleteDeck } from '../../../store/actions'
import { bindActionCreators } from 'redux'
import Question from './question'

const actions = [
  {
    text: 'Add Question',
    icon: <MaterialIcons name='library-add' size={25} color={white} />,
    name: 'add_question',
    color: purple,
    position: 1,
  },
  {
    text: 'Delete this deck',
    icon: <MaterialIcons name='delete' size={25} color={white} />,
    name: 'delete_deck',
    color: purple,
    position: 2,
  }
]

class DeckDetail extends Component {

  // static navigationOptions = ({ navigation }) => {
  //   const title = navigation.getParam('title', 'Deck Title')
  //   return {
  //     title,
  //     navigationOptions: {
  //       backgroundColor: '#ddd'
  //     }
  //   }    
  // }

  handleDelete = () => {
    const { deck, title, navigation, deleteDeck } = this.props

    deleteDeckAPI(title)
      .then(deleteDeck(deck))
    
    navigation.goBack()
  }

  render () {
    const { deck, title, navigation } = this.props

    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <Header title={`${title}`} subtitle={ `${deck && deck.questions ? deck.questions.length : 0} Cards` } />
          <View style={styles.container}>
            
            <TouchableOpacity 
              style={styles.option}
              onPress={() => {}}>
              <View style={{alignItems: 'center'}}>
                <MaterialIcons name='question-answer' size={30} />
                <Text style={{ fontSize: 20 }}> Start Quiz! </Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={{flex: 1, flexDirection: 'row', marginTop: 20, alignItems: 'center'}}> 
            <View style={{backgroundColor: '#ddd', height: 2, flex: 2, alignSelf: 'center'}} /> 
            <Text style={{ fontSize: 24, color: '#ddd', flex: 1 }}>Cards</Text>
            <View style={{backgroundColor: '#ddd', height: 2, flex: 2, alignSelf: 'center'}} /> 
          </View>

          { (deck && deck.questions && deck.questions.length > 0) && 
            <Question questions={deck.questions} />
          }

        </ScrollView>

        <FloatingAction 
          style={styles.action}
          actions={actions}
          color={purple}
          onPressItem={(name) => {
            switch (name) {
              case 'add_question' :
                navigation.navigate('Cards', {
                  title
                })
                return
              case 'delete_deck' :
                this.handleDelete()
                return
              default:
                alert('default')
                return
            }
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  option: {
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

function mapStateToProps ({ decks }, props) {
  const { navigation } = props
  const title = navigation.getParam('title', 'Deck Title')

  return {
    title,
    navigation,
    deck: decks[title] ? decks[title] : []
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deleteDeck}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(DeckDetail))