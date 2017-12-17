import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { footerHeight } from '../constants/styles';

const Footer = () => (
  <View style={{ height: footerHeight }}>
    <Text>Footer here</Text>
    <Text>Footer here</Text>
    <Text>Footer here</Text>
  </View>
);

export default Footer;
