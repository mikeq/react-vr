import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class verona extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('budapest.jpg')}/>
        <Text
          style={{
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          Budapest
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('verona', () => verona);
