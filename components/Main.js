import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Animated,
  Easing,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Tile } from 'react-native-elements';
import Details from './details';
import Footer from './footer';
import HarveyFinder from './harvey_finder';
import { recipes } from '../constants/constants';
import { colors } from '../constants/styles';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.lightBlue,
  },
  headerIconWrapper: {
    backgroundColor: colors.blue,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.headerBorderBottomGrey,
  },
  headerIcon: {
    alignSelf: 'center',
    height: 32,
    resizeMode: 'contain',
    marginTop: 45,
    marginBottom: 10,
  },
  headerIconWithBackButton: {
    alignSelf: 'center',
    height: 32,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  tile: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
  },
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.savouryPressed = this.savouryPressed.bind(this);
    this.locationPressed = this.locationPressed.bind(this);
    this.sweetPressed = this.sweetPressed.bind(this);
  }

  savouryPressed() {
    this.props.navigation.navigate(
      'Main',
      { category: 'savoury' },
    );
  }

  locationPressed() {
    this.props.navigation.navigate(
      'HarveyFinder',
      { category: 'location' },
    );
  }

  sweetPressed() {
    this.props.navigation.navigate(
      'Main',
      { category: 'sweet' },
    );
  }

  render() {
    const filter = this.props.navigation.state.params.category;
    const tiles = recipes.map((recipe) => {
      const eachRecipe = Object.values(recipe);
      return eachRecipe.map((data) => {
        if (data.category === filter) {
          return (
            <Tile
              containerStyle={{
                margin: 15,
                flex: 1,
                width: 'auto',
                height: 220,
                backgroundColor: '#FFF',
              }}
              imageContainerStyle={{ flex: 2 }}
              contentContainerStyle={{ flex: 1 }}
              titleStyle={{color:colors.darkBlue, fontWeight: 0.3}}
              key={data.title}
              imageSrc={data.image}
              title={data.title}
              onPress={() => {
                this.props.navigation.navigate(
                  'Details',
                  { name: data.title },
                  { params: { name: data.title } },
                );
              }}
            >
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Caption</Text>
                <Text>Caption</Text>
              </View>
            </Tile>
          );
        }
      });
    });
    return (
      <View style={styles.view}>
        <ScrollView>
          {tiles}
        </ScrollView>
        <Footer
          savouryPressed={this.savouryPressed}
          locationPressed={this.locationPressed}
          sweetPressed={this.sweetPressed}
        />
      </View>
    );
  }
}

const MainModalStack = StackNavigator(
  {
    Main: {
      headerMode: 'screen',
      screen: Main,
      navigationOptions: () => ({
        header: (
          <View style={styles.headerIconWrapper}>
            <Image source={require('../public/harvey.png')} style={styles.headerIcon} />
          </View>),
        gesturesEnabled: false,
      }),
    },
    Details: {
      screen: Details,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name}`,
      }),
    },
    HarveyFinder: {
      screen: HarveyFinder,
      navigationOptions: () => ({
        title: 'Find Harvey',
      }),
    },
  },
  {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
      },
    }),
  },
  {
    headerMode: 'screen',
  },
);

export default MainModalStack;
