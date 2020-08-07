import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/navigation/Navigation'
import Splash from './src/screens/Splash'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Splash'
    }
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ currentPage: 'Navigation' })
    }, 4000)
  }
  render() {
    const { currentPage } = this.state
    return (
      <NavigationContainer>
        {currentPage === 'Splash' ? <Splash /> : <Navigation />}
      </NavigationContainer>
    )
  }
}

export default App