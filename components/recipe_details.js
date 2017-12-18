
import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import { StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import Footer from './fixed_footer';
import RecipeSubheader from './recipe_subheading_details';
import { colors } from '../constants/styles';
import { recipes } from '../constants/constants';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.lightBlue,
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

function mapRecipe(data, type, recipeName) {
  return (data.map((recipe) => {
    const eachRecipe = Object.values(recipe);
    return eachRecipe.map((info) => {
      if (info.title === recipeName) {
        return (
          <List container containerStyle={{ borderBottomWidth: 0, borderTopWidth: 0 }}>
            {info[type].map(item => (
              <ListItem
                key={item}
                containerStyle={{ borderBottomWidth: 0, borderTopWidth: 0 }}
                title={item}
                titleStyle={{ fontSize: 16 }}
                titleNumberOfLines={4}
                hideChevron
              />))}
          </List>
        );
      }
      return false;
    });
  }));
}

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
    let cookTime;
    let servings;

    const ingredients = mapRecipe(recipes, 'ingredients', recipeName);
    const instructions = mapRecipe(recipes, 'instructions', recipeName);
    recipes.map((recipe) => {
      const eachRecipe = Object.values(recipe);
      return eachRecipe.map((info) => {
        if (info.title === recipeName) {
          imagePath = info.image;
          cookTime = info.time;
          servings = info.serving;
        }
        return false;
      });
    });

    return (
      <View style={styles.view}>
        <ScrollView>
          <Card image={imagePath} containerStyle={{ marginBottom: 15 }}>
            <RecipeSubheader time={cookTime} serving={servings} />
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

Details.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.shape({
        name: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
};

export default DetailsModalStack;
