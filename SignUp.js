import React from 'react';

import { Stylesheet, Text, View, FlatList, TextView } from 'react-native';


export default class SignUp extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        email:'',
        password: '',

    };
}

static navigationOptions = {
  title: 'SignUp Page'
};


   render () { 
    return (
    <View>
      <TextInput style={ {width: 50} } onChange={(email) => this.setState({email})}
          value = {this.state.email} />

      <TextInput style={ {width: 50} } onChange={(password) => this.setState({password})}
          value = {this.state.password} />
        <Button 
           title={'Sign Up'} 
           onPress={()=>{
            this.props.navigation.navigate('SignUp');
          }} />
    </View>
      
    );
   }
}