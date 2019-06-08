import React from 'react'
import { View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../../components/header'
import DeckList from '../deck/decklist'
import { handleInitialData } from '../../store/actions'
import { withNavigation } from 'react-navigation'
import { FloatingAction } from 'react-native-floating-action'
import { purple } from '../../../utils/colors'
import { Constants } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import { white } from '../../../utils/colors'

function FlashcardsStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={ backgroundColor } {...props} />
    </View>
  )
}

class Home extends React.Component {

  componentDidMount() {
    const { handleInitialData } = this.props
    handleInitialData()
  }

  render() {

    const { navigation } = this.props

    return (
      <View style={{flex: 1}}>
        <FlashcardsStatusBar backgroundColor={purple} barStyle='light-content' />
        <Header title='Home' />
        <View style={{flex: 1}}>
          <DeckList />
        </View>

        <FloatingAction
          color={purple}
          showBackground={false}
          position="right"
          floatingIcon={
            <Ionicons name='md-add' size={30} color={white} />
          }
          onPressMain={() => navigation.navigate('NewDeck')}
        />

      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ handleInitialData }, dispatch)
}

export default connect(null, mapDispatchToProps)(withNavigation(Home))