import React from 'react';
import { StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Tile } from 'react-native-elements';
import Details from './Details';

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
    return (
      <View style={styles.view}>
        <ScrollView>
          <Tile
            imageSrc={require('./public/harvey.jpg')}
            title="Bacon wrapped in bacon."
            featured
            caption="The perfect midnight snack."
            onPress={() => { this.props.navigation.navigate('Details'); }}
          />
          <Tile
            imageSrc={require('./public/harvey.jpg')}
            title="Bacon wrapped in bacon."
            featured
            caption="The perfect midnight snack."
            onPress={() => { this.props.navigation.navigate('Details'); }}
          />
          <Tile
            imageSrc={require('./public/harvey.jpg')}
            title="Bacon wrapped in bacon."
            featured
            caption="The perfect midnight snack."
            onPress={() => { this.props.navigation.navigate('Details'); }}
          />
        </ScrollView>
        <View>
          <Text>hihi</Text>
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
