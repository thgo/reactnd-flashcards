import React from 'react'
import PropTypes from 'prop-types'
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

function DeckDetail ({ deck, title, navigation, deleteDeck }) {

  navigateToQuiz = (title) => {
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
    deleteDeckAPI(title)
      .then(deleteDeck(deck))

    navigation.goBack()
  }

  handleFloatingAction = (name) => {
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

DeckDetail.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  deck: PropTypes.object.isRequired,
  deleteDeck: PropTypes.func.isRequired
}

function mapStateToProps ({ decks }, props) {
  const { navigation } = props
  const title = navigation.getParam('title', 'Deck Title')

  return {
    title,
    navigation,
    deck: decks[title] || {}
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deleteDeck}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withNavigation(DeckDetail)
)