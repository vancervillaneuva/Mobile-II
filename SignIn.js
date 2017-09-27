import React from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import axios from 'axios';

export default class SignIn extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        email:'',
        password: '',
    };

    this.signIn = this.signIn.bind(this);
}

signIn() {
    axios.post('https://mobile-server-ii.herokuapp.com/signin', {
      email: this.state.email,
      password: this.state.password,
    }).then((response) => {
      if (response.data.code === 11000) {
        return this.setState({
          error: 'Username and Password are incorrect',
        });
      }
      this.props.navigation.navigate('Content', { token: response.data.token });
    }).catch((error) => {
      console.log(error);
    });
  }


static navigationOptions = {
  title: 'SignIn Page'
};


   render () { 
    return (
    <View>
      <TextInput style={ {width: 50} } onChange={(email) => this.setState({email})}
          value = {this.state.email} />

      <TextInput style={ {width: 50} } onChange={(password) => this.setState({password})}
          value = {this.state.password} />
        <Button 
           title={'Submit'} 
           onPress={this.signIn} 
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
    justifyContent: 'center',
  },
  textInput: {
    height: 20,
    borderColor: 'gray',
    borderWidth: 1,
    width: 150,
  },
});