import MapView from 'react-native-maps';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { location } from '../constants/constants';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

class HarveyFinder extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Woof!"
          />
        </MapView>
      </View>
    );
  }
}

export default HarveyFinder;
