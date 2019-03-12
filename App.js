import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm'; 



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Header headerText="Welcome to Daloy Project" />
          <LoginForm>
            
          </LoginForm>
      </View>
    );
  }
}


const styles = {
  container: {
    flex:1,
    backgroundColor: '#356E9A' 
  }
};