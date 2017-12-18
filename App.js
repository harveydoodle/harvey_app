import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Main from './components/main';
import { colors } from './constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  button: {
    width: 280,
    resizeMode: 'contain',
    height: 60,
  },
  contentWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '90%',
  },
  textWrapper: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  header: {
    color: colors.darkBlue,
    fontWeight: '800',
    fontSize: 32,
    backgroundColor: 'rgba(0,0,0,0)',
    lineHeight: 52,
  },
  subheading: {
    color: colors.darkBlue,
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 18,
  },
});

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.enterPressed = this.enterPressed.bind(this);
    console.disableYellowBox = true; // eslint-disable-line
  }

  enterPressed() {
    this.props.navigation.navigate(
      'Main',
      {},
      { params: { category: 'savoury' } },
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./public/splash.png')} style={styles.backgroundImage}>
          <View style={styles.contentWrapper}>
            <View style={styles.textWrapper}>
              <Text style={styles.header}>Harvey</Text>
              <Text style={styles.subheading}>The human-sized goldendoodle</Text>
            </View>
            <TouchableOpacity style={{ marginTop: '15%' }} activeOpacity={0.8} onPress={this.enterPressed}>
              <Image source={require('./public/white_button.png')} style={styles.button} />
            </TouchableOpacity>
          </View>
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

SplashPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ModalStack;
