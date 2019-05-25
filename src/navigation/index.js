import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import DeckList from '../views/deck/decklist'
import NewDeck from '../views/deck/newdeck'
import DeckDetail from '../views/deck/deckdetail'
import Cards from '../views/deck/deckdetail/cards'
import Home from '../views/home'
import { purple, white, red } from '../../utils/colors'
import { Ionicons } from '@expo/vector-icons'

const TabNavigator = createMaterialTopTabNavigator({
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />,
    },
  },
  Cards: {
    screen: Cards,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />,
    },
  },
},{
  navigationOptions: {
    title: 'Teste',
    headerStyle: {
      backgroundColor: purple
    },
    headerTintColor: white
  },
  tabBarOptions: {
    activeTintColor: purple,
    style: {
      height: 56,
      backgroundColor: '#DDD',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }}
)

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
    screen: TabNavigator
  }
},{
  navigationOptions: {
    headerStyle: {
      backgroundColor: purple
    },
    headerTintColor: white
  }
}))