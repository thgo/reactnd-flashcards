import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { FloatingAction } from 'react-native-floating-action'
import { purple, white } from '../../../utils/colors'

class Cards extends Component {

  static navigationOptions = {
    title: 'New Card',
    headerOptions: {
      backgroundColor: purple
    },
    tintColor: white
  }

  render () {

    const { questions } = this.props

    return (
      <View style={styles.container}>
        {questions && questions.map((question, index) => (
          <Text key={index}>{question.question}</Text>
        ))}

        <FloatingAction 
          style={styles.action}
          //actions={actions}
          color={purple}
          showBackground={false}
          animated={false}
          onPressMain={() => navigation.navigate('NewCard')}
          //onPressItem={() => navigation.navigate('NewDeck')}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  action: {
    alignSelf: 'flex-end'
  }
})

function mapStateToProps ({ decks }, props) {
  const {navigation} = props
  const title = navigation.getParam('title', 'Deck Title')
  const questions = decks[title].questions  

  return {
    questions
  }
}

export default connect(mapStateToProps)(withNavigation(Cards)) 