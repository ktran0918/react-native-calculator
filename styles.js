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
    marginBottom: '5%'
  },
  numberInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
    textAlign: 'center',
    width: '35%',
    height: '100%',
    fontSize: 17
  },
  enterButton: {
    height: '100%',
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: 'green'
  },
  operatorSymbolView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5%'
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
    marginBottom: '2%'
  },
  resultsView: {
    alignItems: 'flex-end'
  },
  resultBox: {
    marginLeft: '3%',
    paddingHorizontal: '2%',
    paddingVertical: '1%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 100
  }
});
