import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

class HomeScreen extends React.Component {
    render() {
        const { navigation } = this.props;

        return (
            <View style="styles">
                <Text>
                    Welcome to the MARA App! Navigate to the audio and video pages using the buttons!
                </Text>
                <Button
                    title="Go to Audio Page!"
                    onPress={() => navigation.navigate('AudioScreen')}
                />
                <Button
                    title="Go to Video Page!"
                    onPress={() => navigation.navigate('VideoScreen')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },
});

export default HomeScreen;