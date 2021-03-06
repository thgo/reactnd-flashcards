import { StyleSheet } from 'react-native'
import { white } from '../../../../utils/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16
  },
  deck: {
    backgroundColor: white,
    borderRadius: 5,
    height: 100,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 5,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  action: {
    bottom: 0
  }
})