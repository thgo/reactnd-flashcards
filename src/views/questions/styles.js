import { StyleSheet } from 'react-native'
import { white } from '../../../utils/colors'

export default StyleSheet.create({
  question: {
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
    marginBottom: 5,
    marginLeft: 10,
    padding: 20,
    marginBottom: 16,
    backgroundColor: white,
    borderRadius: 3,
    minHeight: 60,
    elevation: 4,
    shadowColor: '#ddd',
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
})