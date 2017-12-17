import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Footer from './Footer';
import MainModalStack from './Main';

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
    console.log('location pressed');

  //   this.props.navigation.navigate(
  //     'Main',
  //     { category: 'location' },
  //   );
  }

  sweetPressed() {
    this.props.navigation.navigate(
      'Main',
      { category: 'sweet' },
    );
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.view}>
        <ScrollView>
          <Text>yo</Text>
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
