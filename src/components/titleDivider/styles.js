import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: '#ddd'
  },
  leftLine: {
    flex: 1,
    backgroundColor: '#ddd',
    height: 1
  },
  rightLine: {
    flex: 1,
    backgroundColor: '#ddd',
    height: 1
  }
})