import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text, View,
  TextInput, Button, TouchableHighlight,
  ScrollView,
  KeyboardAvoidingView, Keyboard
} from 'react-native';

function calculate(leftSide, rightSide, operator) {
  switch (operator) {
    case 'plus':
      return leftSide + rightSide;
    case 'minus':
      return leftSide - rightSide;
    case 'multiply':
      return leftSide * rightSide;
    case 'divide':
      return leftSide / rightSide;
  }
}

function operatorToSymbol(operatorName) {
  switch (operatorName) {
    case 'plus':
      return '+';
    case 'minus':
      return '−';
    case 'multiply':
      return '×';
    case 'divide':
      return '÷';
  }
}

// function 

export default function App() {
  const [leftSide, setLeftSide] = useState(null);
  const [rightSide, setRightSide] = useState(null);
  const [operatorName, setOperatorName] = useState('plus');
  const [result, setResult] = useState(null);
  const [resultList, setResultList] = useState([]);

  // const operatorNames = [
  //   'plus', 'minus', 'multiply', 'divide'
  // ];

  const operatorNames = [
    {
      name: 'plus',
      color: 'cornflowerblue',
    },
    {
      name: 'minus',
      color: 'salmon'
    },
    {
      name: 'multiply',
      color: 'darkseagreen'
    },
    {
      name: 'divide',
      color: 'khaki'
    }
  ];

  const scrollView = useRef(null);

  return (
    <KeyboardAvoidingView
      behavior='padding'
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
      {/* <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        <View> */}
      <View style={styles.numberInputView}>
        <TextInput
          onChangeText={value => setLeftSide(Number(value))}
          keyboardType='numeric'
          style={styles.numberInput}
        />

        <Text style={styles.operatorSymbol}>
          {operatorToSymbol(operatorName)}
        </Text>

        <TextInput
          onChangeText={value => setRightSide(Number(value))}
          keyboardType='numeric'
          style={styles.numberInput}
        />

        {/* <TouchableHighlight
          onPress={() => {
            let result = calculate(leftSide, rightSide, operatorName);
            let resultItem = {
              leftSide,
              rightSide,
              operatorName,
              result
            };
            setResultList(resultList.concat(resultItem));
          }}
          style={styles.enterButton}
        >
          <Text style={styles.operatorSymbol}>
            {'Enter'}
          </Text>
        </TouchableHighlight> */}

        <Button
          title='Enter'
          onPress={() => {
            let result = calculate(leftSide, rightSide, operatorName);
            let resultItem = {
              leftSide,
              rightSide,
              operatorName,
              result
            };
            setResultList(resultList.concat(resultItem));
          }}
        />

      </View>

      <View style={styles.operatorSymbolView}>
        {operatorNames.map((value, index) => {
          return <TouchableHighlight
            onPress={() => setOperatorName(value.name)}
            key={index}
            style={{
              ...styles.operatorButton,
              backgroundColor: value.color
            }}
          // style={styles.operatorButton}
          >
            <Text style={styles.operatorSymbol}>
              {operatorToSymbol(value.name)}
            </Text>
          </TouchableHighlight>;
        })}
      </View>

      {/* <Pressable>
        <Text>Test</Text>
      </Pressable> */}


      {/* <FlatList
        data={resultList}
        renderItem={({ row }) => <Text style={{ color: 'black' }}>{JSON.stringify(row)}</Text>}
        style={{
          height: 1000,
          width: 1000,
          backgroundColor: 'pink'
        }}
      /> */}

      <ScrollView
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        style={styles.resultsScrollView}
      >
        <View
          style={styles.resultsView}>
          {resultList.map(({ leftSide, rightSide, operatorName, result }, index) => {
            return <Text
              key={index}
              style={{
                marginVertical: 5,
                fontSize: 17
              }}
            >
              {`${leftSide} ${operatorToSymbol(operatorName)} ${rightSide} = ${result}`}
            </Text>;
          })}
        </View>
      </ScrollView>

      <Button
        title='Clear'
        onPress={() => setResultList([])}
      />
      {/* </View>
      </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: '15% 10%'
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
    padding: '2% 4%',
    borderRadius: 3,
    alignItems: 'center',
    width: 80,
    height: 50,
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
    paddingHorizontal: '5%',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'lightgray'
  },
  resultsView: {
    alignItems: 'flex-end'
  }
});
