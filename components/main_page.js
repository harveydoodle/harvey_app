import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Animated,
  Easing,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Tile } from 'react-native-elements';
import Details from './recipe_details';
import Footer from './fixed_footer';
import HarveyFinder from './harvey_finder';
import RecipeSubheader from './recipe_subheading_details';
import { recipes } from '../constants/constants';
import { colors, navHeaderStyle } from '../constants/styles';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.lightBlue,
  },
  headerIconWrapper: navHeaderStyle,
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
  },
  subheaderContentWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 5,
  },
  subheaderIcon: {
    width: 20,
    resizeMode: 'contain',
    marginRight: 5,
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
                marginLeft: 15,
                marginRight: 15,
                marginTop: 15,
                flex: 1,
                width: 'auto',
                height: 220,
                backgroundColor: '#FFF',
              }}
              imageContainerStyle={{ flex: 2 }}
              contentContainerStyle={{ flex: 1 }}
              titleStyle={{ color: colors.darkBlue, fontWeight: '700' }}
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
              <RecipeSubheader time={data.time} serving={data.serving} />
            </Tile>
          );
        }
        return false;
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
        headerTintColor: '#FFF',
        headerStyle: navHeaderStyle,
      }),
    },
    HarveyFinder: {
      screen: HarveyFinder,
      navigationOptions: () => ({
        title: 'Find Harvey',
        headerTintColor: '#FFF',
        headerStyle: navHeaderStyle,
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

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.shape({
        category: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
};

export default MainModalStack;
