import React from 'react';
import { View, Text, Button } from 'react-native';

class VideoScreen extends React.Component {
    render() {
        const { navigation } = this.props;

        return (
            <View>
                <Text>Welcome to our video page!</Text>
            </View>
        );
    }
}

export default VideoScreen;