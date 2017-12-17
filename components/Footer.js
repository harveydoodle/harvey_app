import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
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

const Footer = () => (
  <View style={styles.footer}>
    <TouchableOpacity
      onPress={() => {console.log('savory snacks')}}
      style={styles.imageWrapper}
    >
      <Image
        source={require('../public/harvey.png')}
        style={styles.footerIcon}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.imageWrapper}
      onPress={() => {console.log('goes to map')}}
    >
      <Image
        source={require('../public/harvey.png')}
        style={styles.footerIcon}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {console.log('sweet snacks')}}
      style={styles.imageWrapper}
    >
      <Image
        source={require('../public/harvey.png')}
        style={styles.footerIcon}
      />
    </TouchableOpacity>
  </View>
);

export default Footer;
