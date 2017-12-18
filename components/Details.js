import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import Footer from './footer';
import { recipes } from '../constants/constants';

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

class Details extends React.Component {
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
      { category: 'HarveyFinder' },
    );
  }

  sweetPressed() {
    this.props.navigation.navigate(
      'Main',
      { category: 'sweet' },
    );
  }

  render() {
    const recipeName = this.props.navigation.state.params.name;
    let imagePath;
    const ingredients = recipes.map((recipe) => {
      const eachRecipe = Object.values(recipe);
      return eachRecipe.map((data) => {
        if (data.title === recipeName) {
          imagePath = data.image;
          return (
            <List container>
              {data.ingredients.map((item, key) => {
                return (<ListItem key={key} title={item} />);
              })}
            </List>
          );
        }
      });
    });
    const instructions = recipes.map((recipe) => {
      const eachRecipe = Object.values(recipe);
      return eachRecipe.map((data) => {
        if (data.title === recipeName) {
          imagePath = data.image;
          return (
            <List container>
              {data.instructions.map((item, key) => {
                return (<ListItem key={key} title={item} />);
              })}
            </List>
          );
        }
      });
    });
    return (
      <View style={styles.view}>
        <ScrollView>
          <Card image={imagePath}>
            <Text style={{ marginBottom: 10 }}>
              {recipeName}
            </Text>
            {ingredients}
            {instructions}
          </Card>
        </ScrollView>
        <View>
          <Footer
            savouryPressed={this.savouryPressed}
            locationPressed={this.locationPressed}
            sweetPressed={this.sweetPressed}
          />
        </View>
      </View>
    );
  }
}

const DetailsModalStack = StackNavigator(
  {
    Details: {
      headerMode: 'screen',
      screen: Details,
    },
  },
  { headerMode: 'none' },
);

export default DetailsModalStack;
