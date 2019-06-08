import { StyleSheet } from 'react-native'
import { white, purple } from '../../../../utils/colors'

export default StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: white,
    borderRadius: 5,
    minHeight: 200,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 16,
    marginLeft: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  btn: {
    width: 120,
    height: 40,
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
    borderColor: purple,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  textView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textPercent: {
    fontSize: 40,
    color: purple,
    marginTop: 20
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})