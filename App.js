import React from 'react';
import { StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
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

class SplashPage extends React.Component {
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
        <Button
          title="enter"
          onPress={this.enterPressed}
        />
      </View>
    );
  }
}

const ModalStack = StackNavigator({
  Home: {
    screen: SplashPage,
    navigationOptions: {
      header: null,
    },
  },
  Main: {
    screen: Main,
    navigationOptions: {
      header: null,
    },
  },
});

export default ModalStack;
