import React from 'react';
import { StyleSheet, Text } from 'react-native';

function AppTitleText(props) {
  let { appTitle } = props;

  return (
    <Text style={styles.appTitle}>
      {appTitle}
    </Text>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    // textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 25
  }
});

export default AppTitleText;
