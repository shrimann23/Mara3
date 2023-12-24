import React from 'react';
import { View, Button } from 'react-native';

class HomeScreen extends React.Component {
    render() {
        const { navigation } = this.props;

        return (
            <View>
                <Button
                    title="Go to Audio Screen"
                    onPress={() => navigation.navigate('AudioScreen')}
                />
                <Button
                    title="Go to Video Screen"
                    onPress={() => navigation.navigate('VideoScreen')}
                />
            </View>
        );
    }
}

export default HomeScreen;