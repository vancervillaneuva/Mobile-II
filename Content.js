import React from 'react';

import { Stylesheet, Text, View, FlatList } from 'react-native';


export default class Content extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        userNames: [],
    };
}


componentDidMount() {
    const token = this.props.navigation.state.params.token;
    axios.get('https://mobile-server-ii.herokuapp.com/user', {
      headers: {
        authorization: token,        
      }
    }).then((response) => {
      this.setState({
        userNames: response.data.todos,
        userId: response.data._id,
      });
    }).catch(err => {
      console.log(err);
    });
  }

static navigationOptions = {
  title: 'Content Page'
}

   render () { 
    return (
      <View>
      <FlatList 
      data={this.state.userNames}
      renderItems={( user )=> {
       return <Text>(user)</Text>
      }}/>
    </View>
      
    );
   }
}