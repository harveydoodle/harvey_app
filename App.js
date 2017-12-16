import React from 'react';
import { StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Main from './Main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.enterPressed = this.enterPressed.bind(this);
  }

  enterPressed() {
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>HARVEY</Text>
        <Button title="enter" onPress={this.enterPressed} />
      </View>
    );
  }
}

const ModalStack = StackNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      header: null,
    },
  },
  Main: {
    screen: Main,
    headerMode: 'none',
    navigationOptions:
      {
        title: 'Harvey\'s Favourites',
      },
  },
});

export default ModalStack;
