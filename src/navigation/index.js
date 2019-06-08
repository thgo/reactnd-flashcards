import { createStackNavigator, createAppContainer } from 'react-navigation'
import DeckList from '../views/deck/decklist'
import NewDeck from '../views/deck/newdeck'
import DeckDetail from '../views/deck/deckdetail'
import Cards from '../views/deck/deckdetail/cards'
import Home from '../views/home'
import Quiz from '../views/quiz'
import Result from '../views/quiz/result'
import { purple, white } from '../../utils/colors'

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
    screen: NewDeck
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      title: 'Deck',
      headerStyle: {
        backgroundColor: purple
      },
      headerTintColor: white
    }
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