import { StyleSheet } from 'react-native'
import { white } from '../../../utils/colors'

export default StyleSheet.create({
  quizContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 16
  },
  cardContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    flex: 1,
    backgroundColor: white,
    borderRadius: 5,
    minHeight: 300,
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
  questionTitle: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  },
  questionText: {
    flex: 2,
    alignItems: 'center'
  },
  voteContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    justifyContent: 'space-between',
    marginTop: 30
  },
  voteBtn: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})