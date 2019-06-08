import { StyleSheet } from 'react-native'
import { red } from '../../../../utils/colors'

export default StyleSheet.create({
  containerSeparator: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center'
  },
  lineSeparator: {
    flex: 1,
    backgroundColor: '#eee',
    height: 1,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  deleteBtn: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: red,
    padding: 10,
    width: 100
  }
})