import { StyleSheet } from 'react-native'
import { white, purple } from '../../../../../utils/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  action: {
    alignSelf: 'flex-end'
  },
  text: {
    fontSize: 20,
    fontWeight: '600'
  },
  inputText: {
    width: 300,
    height: 44,
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#757575',
    margin: 20
  },
  button: {
    padding: 10,
    backgroundColor: purple,
    borderRadius: 5,
    margin: 20,
    alignSelf: 'stretch'
  },
  buttonText: {
    textAlign: 'center',
    color: white,
    fontSize: 20,
  }
})