import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  MediaPlayerState,
  VideoControl,
  Video,
  VideoPano,
  VrButton
} from 'react-360';

import MyControl from './MyControl';

export default class test_360 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerState: new MediaPlayerState({autoPlay: false, muted: true}),
    };
  }

  render() {

    // For  'external' user interaction can be added this component
    // after the VideoControl component
    // <MyControl playerState={this.state.playerState} />
    return (
      <View
        style={{
          transform:[{translate:[0,0,-4]}],
          layoutOrigin: [0.5, 0.5]
        }}
      >
      <VideoPano
        playerState={this.state.playerState}
        source={[
          asset('video.mp4', {format: 'mp4', layout: 'SPHERE'}),
        ]}
      />
         <VideoControl
           style={{
             height: 0.2,
             width: 2,
             transform:[{translate:[1,0,1]}]
           }}
          playerState={this.state.playerState} />


      </View>
    );
  }
};

AppRegistry.registerComponent('test_360', () => test_360);
