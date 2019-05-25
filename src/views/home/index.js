import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../header'
import DeckList from '../deck/decklist'
import { handleInitialData } from '../../store/actions'

class Home extends React.Component {

  async componentDidMount() {
    const { handleInitialData } = this.props
    await handleInitialData()
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title='Home' />
        <View style={{ flex: 1 }}>
          <DeckList />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ handleInitialData }, dispatch)
}

export default connect(null, mapDispatchToProps)(Home)