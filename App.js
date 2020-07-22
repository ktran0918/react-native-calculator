import React, { useState, useRef } from 'react';
import {
  Text, View,
  TextInput, Button, TouchableHighlight,
  ScrollView,
  KeyboardAvoidingView, Keyboard,
  Platform
} from 'react-native';

import styles from './styles';
import AppTitleText from './components/customText';

function calculate(leftSide, rightSide, operator) {
  leftSide = Number(leftSide);
  rightSide = Number(rightSide);

  switch (operator) {
    case 'plus':
      return leftSide + rightSide;
    case 'minus':
      return leftSide - rightSide;
    case 'multiply':
      return leftSide * rightSide;
    case 'divide':
      return (leftSide / rightSide).toFixed(4);
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
  const [resultList, setResultList] = useState([]);

  const [isLeftSide, setIsLeftSide] = useState(true);

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
    // <View
    //   style={styles.container}
    // >
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      // onPress={Keyboard.dismiss}
      style={styles.container}
    >
      {/* <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        <View> */}

      <AppTitleText appTitle='Calculator' />

      <View style={styles.numberInputView}>
        <TextInput
          value={leftSide && String(leftSide)}
          onChangeText={value => setLeftSide(value)}
          onFocus={() => setIsLeftSide(true)}
          keyboardType='numeric'
          style={styles.numberInput}
        />

        <Text style={styles.operatorSymbol}>
          {operatorToSymbol(operatorName)}
        </Text>

        <TextInput
          value={rightSide && String(rightSide)}
          onChangeText={value => setRightSide(value)}
          onFocus={() => setIsLeftSide(false)}
          keyboardType='numeric'
          style={styles.numberInput}
        />

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
            underlayColor='#ccc'
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

      <ScrollView
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        keyboardShouldPersistTaps='always'
        style={styles.resultsScrollView}
      >
        <View
          style={styles.resultsView}
        >
          {resultList.map(({ leftSide, rightSide, operatorName, result }, index) => {
            return <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '2%' }}>
              <Text
                key={index}
                style={{
                  marginVertical: 5,
                  fontSize: 17
                }}
              >
                {`${leftSide} ${operatorToSymbol(operatorName)} ${rightSide} =`}
              </Text>
              <TouchableHighlight
                onPress={() => isLeftSide ? setLeftSide(result) : setRightSide(result)}
                underlayColor='#ccc'
                style={styles.resultBox}
              // style={styles.operatorButton}
              >
                <Text style={styles.operatorSymbol}>
                  {result}
                </Text>
              </TouchableHighlight>
              {/* <Button
                title={String(result)}
                onPress={() => isLeftSide ? setLeftSide(result) : setRightSide(result)}
              /> */}
            </View>;
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
    // </View>
  );
}
