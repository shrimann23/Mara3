import React from 'react';
import { useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

class VideoScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        
        // const [playing, setPlaying] = useState(false);

        // const onStateChange = useCallback((state) => {
        //     if (state === "ended") {
        //         setPlaying(false);
        //         Alert.alert("video has finished playing!");
        //     }
        // }, []);

        // const togglePlaying = useCallback(() => {
        //     setPlaying((prev) => !prev);
        // }, []);

        return (
            <View>
                <Text>Welcome to our video page!</Text>
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

export default VideoScreen;