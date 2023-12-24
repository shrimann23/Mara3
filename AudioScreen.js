import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class AudioScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            sound: null,
            isPlaying: false,
        };
    }

    componentDidMount() {
        this.loadAudio();
    }

    componentWillUnmount() {
        const { sound } = this.state;
        if (sound) {
            console.log('Unloading sound');
            sound.unloadAsync();
        }
    }

    async loadAudio() {
        const { sound: audioSound } = await Audio.Sound.createAsync(require('./assets/piano.mp3'));
        this.setState({ sound: audioSound });

        audioSound.setOnPlaybackStatusUpdate((status) => {
            if (status.isLoaded) {
                this.setState({ isPlaying: status.isPlaying });
            }
        });
    }

    togglePlayback = async() => { //change format to earlier function if it works
        const { sound, isPlaying } = this.state;
        if (sound) {
            if (isPlaying) {
                await sound.pauseAsync();
            } else {
                await sound.playAsync();
            }
            this.setState({ isPlaying: !isPlaying });
        }
    };


    render () {
        const { isPlaying } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to the audio page!</Text>
                
                <Text>Sample Piano Audio</Text>
                <Button title={isPlaying ? 'Pause' : 'Play'} onPress={this.togglePlayback}/>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      padding: 10,
      gap: 15,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
    }
});

export default AudioScreen;