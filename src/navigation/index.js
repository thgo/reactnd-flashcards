import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import DeckList from '../views/deck/decklist'
import NewDeck from '../views/deck/newdeck'
import DeckDetail from '../views/deck/deckdetail'
import Cards from '../views/deck/deckdetail/cards'
import Home from '../views/home'
import Quiz from '../views/quiz'
import Result from '../views/quiz/result'
import { purple, white } from '../../utils/colors'
import { NavigationActions } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

export default createAppContainer(createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    }
  },
  DeckList: {
    screen: DeckList
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      title: 'Create new deck',
      headerStyle: {
        backgroundColor: purple
      },
      headerTintColor: white
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: ({ navigation }) => ({
      title: 'Deck',
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
      ),
      headerStyle: {
        backgroundColor: purple
      },
      headerTintColor: white
    })
  },
  Cards: {
    screen: Cards,
    navigationOptions: {
      title: 'New Card',
      headerStyle: {
        backgroundColor: purple
      },
      headerTintColor: white
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerStyle: {
        backgroundColor: purple
      },
      headerTintColor: white
    }
  },
  Result: {
    screen: Result,
    navigationOptions: {
      headerStyle: {
        backgroundColor: purple
      },
      headerTintColor: white
    }
  }
},{
  navigationOptions: {
    headerStyle: {
      backgroundColor: purple
    },
    headerTintColor: white
  }
}))