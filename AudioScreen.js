import React from 'react';
import { View, Text, Button, Slider } from 'react-native';
import Sound from 'react-native-sound';

class AudioScreen extends React.Component {
    render() {
        const { navigation } = this.props;

        const sound = new Sound('./assets/piano.mp3', (error) => {
            if (error) {
                console.log('Error loading audio file');
            }
        });

        const playSound = () => {
            sound.play();
        };

        const pauseSound = () => {
            sound.pause();
        };

        const stopSound = () => {
            sound.stop();
        }

        return (
            <View>
                <Text>Welcome to the audio page!</Text>
                <Button title="Play" onPress={playSound} />
                <Button title="Pause" onPress={pauseSound} />
                <Button title="Stop" onPress={stopSound} />
            </View>
            
        );
    }
}

export default AudioScreen;