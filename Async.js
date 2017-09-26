import React from 'react';

import { Stylesheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';

export default class Async extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          posts: [],
      }

    }
    
    componentDidMount(){
         axios.get('https://www.jsonplaceholder.typicode.com/posts').then((response)=>{
             this.setState({
                 posts: response,
             })
         });
    }
    
    render() {
        return (
      <View>
      <FlatList 
      data={this.state.foods}
      renderItems={( item )=> {
       return <Text>(item.text)</Text>
      }}/>
       </View>
        );
    }
}