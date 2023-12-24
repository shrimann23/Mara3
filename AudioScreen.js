import React from 'react';
import { View, Text, Button } from 'react-native';
// import SoundComponent from './SoundComponent';

class AudioScreen extends React.Component {
    render() {
        const { navigation } = this.props;

        return (
            <View>
                <Text>Welcome to the audio page!</Text>
                {/* <SoundComponent /> */}
            </View>
            
        );
    }
}

export default AudioScreen;