import React, { useState, useRef } from 'react';
import {
  Text, View,
  TextInput, Button, TouchableHighlight,
  ScrollView,
  KeyboardAvoidingView, Keyboard,
  Platform
} from 'react-native';

import styles from './styles';
import { AppTitleText, OperatorSymbol } from './components/customText';

import arithmetic from './lib/arithmetic';

// function 

export default function App() {
  const [leftSide, setLeftSide] = useState(null);
  const [rightSide, setRightSide] = useState(null);
  const [operatorName, setOperatorName] = useState('plus');
  const [resultList, setResultList] = useState([]);

  const [isLeftSide, setIsLeftSide] = useState(true);

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
    },
    {
      name: 'power',
      color: 'mediumpurple'
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

      <AppTitleText>Calculator</AppTitleText>

      <View style={styles.numberInputView}>
        <TextInput
          value={leftSide && String(leftSide)}
          onChangeText={value => setLeftSide(value)}
          onFocus={() => setIsLeftSide(true)}
          keyboardType='numeric'
          style={styles.numberInput}
        />

        <OperatorSymbol>
          {arithmetic.operatorToSymbol(operatorName)}
        </OperatorSymbol>

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
            let result = arithmetic.calculate(leftSide, rightSide, operatorName);
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
            <OperatorSymbol>
              {arithmetic.operatorToSymbol(value.name)}
            </OperatorSymbol>
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
            return <View
              style={{ flexDirection: 'row', alignItems: 'center', marginTop: '2%' }}
              key={index}
            >
              <Text
                style={{
                  fontSize: 17
                }}
              >
                {`${leftSide} ${arithmetic.operatorToSymbol(operatorName)} ${rightSide} =`}
              </Text>
              <TouchableHighlight
                onPress={() => isLeftSide ? setLeftSide(result) : setRightSide(result)}
                underlayColor='#ccc'
                style={styles.resultBox}
              // style={styles.operatorButton}
              >
                <OperatorSymbol>
                  {result}
                </OperatorSymbol>
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
        title='Clear History'
        onPress={() => setResultList([])}
      />
      {/* </View>
      </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
    // </View>
  );
}
