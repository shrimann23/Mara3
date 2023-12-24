import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

class VideoScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to the video page!</Text>
                <YoutubePlayer
                    videoId={"jpEo8tQjfVY"}
                    play={true}
                    fullscreen={false}
                    height={300}
                    controls={true}
                />

                <YoutubePlayer
                    videoId={"7-7ZgVpUQWM"}
                    play={true}
                    fullscreen={false}
                    height={300}
                    controls={true}
                />

                <YoutubePlayer
                    videoId={"39CmN_AVCW4"}
                    play={true}
                    fullscreen={false}
                    height={300}
                    controls={true}
                />
                
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

export default VideoScreen;