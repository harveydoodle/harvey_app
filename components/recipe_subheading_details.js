import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  subheaderContentWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 5,
    marginLeft: 5,
  },
  subheaderIcon: {
    width: 14,
    resizeMode: 'contain',
    marginRight: 5,
  },
});

const RecipeSubheader = props => (
  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
    <View style={styles.subheaderContentWrapper}>
      <Image source={require('../public/clock.png')} style={styles.subheaderIcon} />
      <Text>{props.time}</Text>
    </View>
    <View style={styles.subheaderContentWrapper}>
      <Image source={require('../public/serving.png')} style={styles.subheaderIcon} />
      <Text>{props.serving}</Text>
    </View>
  </View>
);

RecipeSubheader.propTypes = {
  time: PropTypes.string.isRequired,
  serving: PropTypes.string.isRequired,
};

export default RecipeSubheader;
