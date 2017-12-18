import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { footerHeight } from '../constants/styles';

const styles = StyleSheet.create({
  footer: {
    height: footerHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerIcon: {
    flex: 1,
    width: 18,
    opacity: 0.3,
    resizeMode: 'contain',
  },
});

const Footer = props => (
  <View style={styles.footer}>
    <TouchableOpacity
      onPress={props.savouryPressed}
      style={styles.imageWrapper}
    >
      <Image
        source={require('../public/savoury_inactive.png')}
        style={styles.footerIcon}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.imageWrapper}
      onPress={props.locationPressed}
    >
      <Image
        source={require('../public/location_active.png')}
        style={styles.footerIcon}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={props.sweetPressed}
      style={styles.imageWrapper}
    >
      <Image
        source={require('../public/sweet_inactive.png')}
        style={styles.footerIcon}
      />
    </TouchableOpacity>
  </View>
);

Footer.propTypes = {
  sweetPressed: PropTypes.func.isRequired,
  locationPressed: PropTypes.func.isRequired,
  savouryPressed: PropTypes.func.isRequired,
};

export default Footer;
