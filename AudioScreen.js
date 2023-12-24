import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class AudioScreen extends React.Component {
    render() {
        const { navigation } = this.props;

        const [sound, setSound] = React.useState();

        async function playSound() {
            console.log('Loading Sound');
            const { sound: audioSound } = await Audio.Sound.createAsync(require('./assets/piano.mp3'));
            setSound(audioSound);
            console.log('Playing Sound');
            await audioSound.playAsync();
        }

        React.useEffect(() => {
            return () => {
                if (sound) {
                    console.log('Unloading sound');
                    sound.unloadAsync();
                    setSound(null);
                }
            };  
        }, [sound]);


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