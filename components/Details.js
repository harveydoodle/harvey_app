import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import Footer from './footer';
import { colors } from '../constants/styles';
import { recipes } from '../constants/constants';

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  title: {
    margin: 10,
    fontSize: 22,
    color: colors.darkBlue,
  },
  header: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000',
    marginTop: 20,
    marginLeft: 10,
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
            <List container containerStyle={{ borderBottomWidth: 0, borderTopWidth: 0 }}>
              {data.ingredients.map(item => (
                <ListItem
                  containerStyle={{ borderBottomWidth: 0, borderTopWidth: 0 }}
                  title={item}
                  titleStyle={{ fontSize: 16 }}
                  titleNumberOfLines={2}
                  hideChevron
                />))}
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
            <List container containerStyle={{ borderBottomWidth: 0, borderTopWidth: 0 }}>
              {data.instructions.map(item => (
                <ListItem
                  containerStyle={{ borderBottomWidth: 0, borderTopWidth: 0 }}
                  titleStyle={{ fontSize: 16 }}
                  titleNumberOfLines={4}
                  title={item}
                  hideChevron
                />
              ))}
            </List>
          );
        }
      });
    });
    return (
      <View style={styles.view}>
        <ScrollView>
          <Card image={imagePath} containerStyle={{marginBottom: 15}}>
            <Text style={styles.title}>
              {recipeName}
            </Text>
            <Text style={styles.header}>
              Ingredients
            </Text>
            {ingredients}
            <Text style={styles.header}>
              Instructions
            </Text>
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
