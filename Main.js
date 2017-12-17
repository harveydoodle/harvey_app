import React from 'react';
import { StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Tile } from 'react-native-elements';
import Details from './Details';
import { RECIPES } from './constants/constants';
import { footerHeight, colors } from './constants/styles';

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
    height: 47,
    resizeMode: 'contain',
    marginTop: 35,
    marginBottom: 5,
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
          onPress={() => { this.props.navigation.navigate('Details'); }}
        />
      ));
    });
    return (
      <View style={styles.view}>
        <ScrollView>
          {tiles}
        </ScrollView>
        <View style={{ height: footerHeight }}>
          <Text>Footer here</Text>
        </View>
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
        header: <View style={styles.headerIconWrapper}><Image source={require('./public/harvey.png')} style={styles.headerIcon} /></View>,
      }),
    },
    Details: {
      screen: Details,
      navigationOptions: {
        title: 'Item Clicked Title',
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

export default MainModalStack;
