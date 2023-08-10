import React from 'react';
import RandomScreen from '../view/RandomScreen';

interface RandomViewModelProps {
  navigation: any;
}
var Sound = require('react-native-sound');

// Enable playback in silence mode
Sound.setCategory('Playback');

// Load the sound file 'whoosh.mp3' from the app bundle
// See notes below about preloading sounds within initialization code below.
var whoosh = new Sound('whoosh.mp3', Sound.MAIN_BUNDLE, (error: any) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log(
    'duration in seconds: ' +
      whoosh.getDuration() +
      'number of channels: ' +
      whoosh.getNumberOfChannels(),
  );

  // Play the sound with an onEnd callback
  whoosh.play((success: any) => {
    if (success) {
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
    }
  });
});

const RandomScreenViewModel = (props: RandomViewModelProps) => {
  const {navigation} = props;
  return (
    <RandomScreen
      {...{
        navigation,
      }}
    />
  );
};
export default RandomScreenViewModel;
