import React from 'react';
import { StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import Main from './Main';
import { colors } from './constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    // width: 20,
    height: 10,
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '55%',
  },
  header: {
    color: colors.darkBlue,
    fontWeight: '800',
    fontSize: 32,
    backgroundColor: 'transparent',
  },
  subheading: {
    color: colors.darkBlue,
    backgroundColor: 'transparent',
    fontSize: 18,
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
        <ImageBackground source={require('./public/splash.png')} style={styles.backgroundImage}>
          <View style={styles.textWrapper}>
            <Text style={styles.header}>Harvey</Text>
            <Text style={styles.subheading}>The human-sized goldendoodle</Text>
          </View>
          <ImageBackground source={require('./public/white_button.png')} style={styles.button}>
            <Text>Who\s a good boy?</Text>
          </ImageBackground>
          <Button
            onPress={this.enterPressed}
          >
          <Text>Who\s a good boy?</Text>
          </Button>
        </ImageBackground>
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
