import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import { Tile } from 'react-native-elements';

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.main}>
        <Text>yo</Text>
      </ScrollView>
    );
  }
}

const DetailsModalStack = StackNavigator(
  {
    Details: {
      screen: Details,
    },
  },
  { headerMode: 'none' },
);

export default DetailsModalStack;
