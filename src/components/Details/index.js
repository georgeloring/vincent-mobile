import React from 'react';
import {
    Text,
    View
} from 'react-native';

export class DetailsScreen extends React.Component {
    static navigationOptions = {
      title: 'Details',
    };
  
    render() {
      return (
        <View>
            <Text>Details</Text>
        </View>
      );
    }
}