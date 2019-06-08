import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { withNavigation, NavigationActions } from 'react-navigation'
import { FloatingAction } from 'react-native-floating-action'
import { purple, white } from '../../../../utils/colors'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { deleteDeckAPI } from '../../../services/api'
import { deleteDeck } from '../../../store/actions'
import { bindActionCreators } from 'redux'
import Header from '../../../components/header'
import Questions from '../../questions'
import getTextCard from '../../../../utils/textCards'
import TitleDivider from '../../../components/titleDivider'
import styles from './styles'

const actions = [
  {
    text: 'Add Card',
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

  static navigationOptions = ({ navigation }) => ({
    headerLeft: () => (
      <Ionicons
        name={"ios-close"}
        onPress={() => {
          navigation.goBack()
        }}
        size={48}
        color="white"
        style={{ marginLeft: 16 }}
      />
    )
  })

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: () => (
        <Ionicons
          name={'md-arrow-back'}
          onPress={() => navigation.dispatch(NavigationActions.navigate({
              routeName: 'Home'
            })
          )}
          color={white}
          size={25}
          style={{ marginLeft: 16 }}
        />
      )
    }
  }

  navigateToQuiz = (title) => {
    const { navigation } = this.props

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({
        routeName: 'Quiz',
        params: {
          title
        }
      })],
    })
    navigation.dispatch(resetAction)
  }

  handleDelete = () => {
    const { deck, title, navigation, deleteDeck } = this.props

    deleteDeckAPI(title)
      .then(deleteDeck(deck))

    navigation.goBack()
  }

  handleFloatingAction = (name) => {
    const { navigation, title } = this.props

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
        return
    }
  }

  render () {
    const { deck, navigation } = this.props

    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <Header title={`${deck.title}`} subtitle={ getTextCard(deck) } />
          <View style={styles.container}>

            <TouchableOpacity
              style={styles.option}
              onPress={() => navigation.navigate('Quiz', {
                title: deck.title
              })}
              disabled={deck.questions && deck.questions.length === 0}
            >
              <View style={{alignItems: 'center'}}>
                <MaterialIcons
                  name='question-answer'
                  size={40}
                  color={deck.questions && deck.questions.length > 0 ? '#000' : '#E0E0E0'}
                />
                <Text style={{ fontSize: 20 }}> Start Quiz </Text>
              </View>
            </TouchableOpacity>

          </View>

          { deck && deck.questions && deck.questions.length > 0
            ? <View style={{flex: 1}}>
                <TitleDivider title='Cards' />
                <Questions deck={deck} />
              </View>
            : <View style={styles.emptyMessage}>
                <Text style={{fontSize: 18}}> Add questions to start a quiz </Text>
              </View>
          }

        </ScrollView>

        <FloatingAction
          style={styles.action}
          actions={actions}
          color={purple}
          floatingIcon={
            <Ionicons name='ios-options' size={25} color={white} />
          }
          onPressItem={(name) => this.handleFloatingAction(name)}
        />
      </View>
    )
  }
}

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