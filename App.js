import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'First Thing'},
          ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
          style={styles.list}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    marginTop: 30,
  }
});
