import { StyleSheet } from 'react-native'
import { purple, white } from '../../../utils/colors'

export default StyleSheet.create({
  container: {
    color: white,
    backgroundColor: purple,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: white
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 17,
    color: '#eee'
  }
})