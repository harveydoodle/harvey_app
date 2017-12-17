import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Tile } from 'react-native-elements';
import Details from './Details';
import Footer from './Footer';
import { RECIPES } from '../constants/constants';
import { colors } from '../constants/styles';

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  headerIconWrapper: {
    backgroundColor: colors.headerDefaultGrey,
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
});

class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const tiles = RECIPES.map((recipe) => {
      const eachRecipe = Object.values(recipe);
      return eachRecipe.map(data => (
        <Tile
          key={data.title}
          imageSrc={data.image}
          title={data.title}
          featured
          // caption="The perfect midnight snack."
          onPress={() => {
            this.props.navigation.navigate(
              'Details',
              { name: data.title },
              {
                params: { name: data.title },
              },
            );
          }}
        />
      ));
    });
    return (
      <View style={styles.view}>
        <ScrollView>
          {tiles}
        </ScrollView>
        <Footer />
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
      }),
    },
    Details: {
      screen: Details,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name}`,
      }),
    },
  },
  {
    headerMode: 'screen',
  },
);

export default MainModalStack;
