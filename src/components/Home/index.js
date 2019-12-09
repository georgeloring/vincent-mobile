import React from 'react';
import {
    AsyncStorage,
    Button,
    View,
    Text
} from 'react-native';

export class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome to the app!',
    };

    state = {

    };

    componentDidMount() {
        AsyncStorage.getItem('userToken').then(
            (token) => {
                this.setState({
                    token
                });
            }
        ).catch((err) => {

        });

    }
  
    render() {
      return (
        <View>
            <Text>{this.state.token}</Text>
          <Button title="Show me more of the app" onPress={this._showMoreApp} />
          <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        </View>
      );
    }
  
    _showMoreApp = () => {
      this.props.navigation.navigate('Other');
    };
  
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
}