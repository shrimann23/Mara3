import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class AudioScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            sound: null,
        };
    }

    componentWillUnmount() {
        const { sound } = this.state;
        if (sound) {
            console.log('Unloading sound');
            sound.unloadAsync();
        }
    }

    playSound = async () => {
        console.log('Loading sound');
        const { sound: audioSound } = await Audio.Sound.createAsync(require('./assets/piano.mp3'));
        this.setState({ sound: audioSound });
        
        console.log('Playing sound');
        await audioSound.playAsync();
    };

    render () {
        return (
            <View style={styles.container}>
                <Text>Welcome to the audio page!</Text>
                <Button title="Play Sound" onPress={playSound} />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 10,
    },
});

export default AudioScreen;