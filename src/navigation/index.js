import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import DeckList from '../views/deck/decklist'
import NewDeck from '../views/deck/newdeck'
import DeckDetail from '../views/deck/deckdetail'
import Cards from '../views/cards'
import Home from '../views/home'
import { purple, white } from '../../utils/colors'
import { Ionicons } from '@expo/vector-icons'

const TabNavigator = createMaterialTopTabNavigator({
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ddd'
      }
    }
  },
  Cards: {
    screen: Cards,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ddd'
      }
    }
  },
}, {
  navigationOptions: {
    title: 'Deck',
    headerStyle: {
      backgroundColor: purple
    },
    headerTintColor: white
  }
})

export default createAppContainer(createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
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
  }
},{
  navigationOptions: {
    headerStyle: {
      backgroundColor: purple
    },
    headerTintColor: white
  }
}))