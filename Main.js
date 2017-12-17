import React from 'react';
import { StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Tile } from 'react-native-elements';
import Details from './Details';
import { RECIPES } from './constants/constants';
import { footerHeight } from './constants/styles';

const styles = StyleSheet.create({
  view: {
    flex: 1,
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
      screen: Main,
      navigationOptions: {
        title: 'Harvey\'s Favourites',
      },
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
