import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: '15%',
    marginHorizontal: '10%'
  },
  numberInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  numberInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    // paddingVertical: '3%',
    // paddingHorizontal: '4%',
    borderRadius: 3,
    textAlign: 'center',
    width: 100,
    height: 40,
    fontSize: 17
  },
  enterButton: {
    height: 50,
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: 'green'
  },
  operatorSymbolView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  operatorSymbol: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  operatorButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 100
  },
  resultsScrollView: {
    paddingHorizontal: '4%',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'lightgray',
    marginBottom: 5
  },
  resultsView: {
    alignItems: 'flex-end'
  },
  resultBox: {
    marginLeft: 10,
    paddingHorizontal: '2%',
    paddingVertical: '1%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 100
  }
});
