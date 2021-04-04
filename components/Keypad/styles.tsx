import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  rowStyle: {
    backgroundColor: '#34386C',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 10,
    margin: 6,
    height: 50,
    maxHeight: 50
  },
  columnStyle: { flexDirection: 'row', justifyContent: 'space-between' },
  keypadContainer: { marginVertical: 40 }
})
