import React from 'react';
import { View, Text, Button, Slider } from 'react-native';
import Audio from 'react-native-audio';

class AudioScreen extends React.Component {
    render() {
        const { navigation } = this.props;

        const audio = new Audio(require('./assets/piano.mp3'));

        // const playSound = () => {
        //     audio.play();
        // }

        // const pauseSound = () => {
        //     audio.pause();
        // }

        // const stopSound = () => {
        //     audio.stop();
        // }

        return (
            <View>
                <Text>Welcome to the audio page!</Text>
                {/* <Button title="Play" onPress={playSound} />
                <Button title="Pause" onPress={pauseSound} />
                <Button title="Stop" onPress={stopSound} /> */}
            </View>
            
        );
    }
}

export default AudioScreen;