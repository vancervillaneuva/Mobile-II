import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Content from './Content';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button 
           title={'Sign In'} 
           onPress={()=>{
            this.props.navigation.navigate('SignIn');
          }} />
        <Button 
           title={'Sign Up'} 
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
  App: { screen: App },
  SignUp: { screen: SignUp},
  SignIn: { screen: SignIn},
  Content: { screen: Content },
});

export default { Routes, App };