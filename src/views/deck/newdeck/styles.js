import { StyleSheet } from 'react-native'
import { purple, white } from '../../../../utils/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

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
