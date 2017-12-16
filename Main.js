import React from 'react';
import { StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>THIS IS THE MAIN PAGE</Text>
      </View>
    );
  }
}

export default Main;
