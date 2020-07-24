import React from 'react';
import { StyleSheet, Text } from 'react-native';

function AppTitleText(props) {
  return (
    <Text style={styles.appTitle}>
      {props.children}
    </Text>
  );
}

function OperatorSymbol(props) {
  return (
    <Text style={styles.operatorSymbol}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    // textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: '5%'
  },
  operatorSymbol: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
});

export {
  AppTitleText,
  OperatorSymbol
};
