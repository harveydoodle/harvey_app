import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { footerHeight, colors } from '../constants/styles';

const styles = StyleSheet.create({
  footer: {
    height: footerHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.headerDefaultGrey,
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerIcon: {
    flex: 1,
    width: 25,
    resizeMode: 'contain',
  },
});

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      savouryActive: true,
      sweetActive: false,
      locationActive: false,
    };
  }

  render() {
    const { savouryActive, sweetActive, locationActive } = this.state;
    const savouryIcon = savouryActive
      ? require('../public/savoury_active.png')
      : require('../public/savoury_inactive.png');
    const sweetIcon = sweetActive
      ? require('../public/sweet_active.png')
      : require('../public/sweet_inactive.png');
    const locationIcon = locationActive
      ? require('../public/location_active.png')
      : require('../public/location_inactive.png');

    return (
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={this.props.savouryPressed}
          style={styles.imageWrapper}
        >
          <Image
            source={savouryIcon}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageWrapper}
          onPress={this.props.locationPressed}
        >
          <Image
            source={locationIcon}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.props.sweetPressed}
          style={styles.imageWrapper}
        >
          <Image
            source={sweetIcon}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}


export default Footer;
