import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

class HomeScreen extends React.Component {
    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Welcome to the MARA App! 
                </Text>
                <Text style={styles.text2}>Navigate to the audio and video pages using the buttons!</Text>
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
      textAlign: 'center',
      padding: 10,
      gap: 20,
    },
    text: {
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center',
    },
    text2: {
        fontWeight:'bold',
        fontSize:20,
        textAlign: 'center',
    }
});

export default HomeScreen;