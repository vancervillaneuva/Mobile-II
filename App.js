import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button 
           title={'Sign In'} 
           onPress={()=>{
            this.props.navigation.navigate('SignIn');
          }} />
           <Button 
           title={'Sign UP'} 
           onPress={()=>{
            this.props.navigation.navigate('SignUp');
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const Routes = StackNavigator({
  Home: { screen: Home },
  SignUp: { screen: SignUp},
  SignIn: { screen: SignIn},
  Content: { screen: Content },
  Async: { screen: Async },
});

export default Routes;