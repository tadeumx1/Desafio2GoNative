import React, {Component} from 'react';

// import 'config/ReactotronConfig';

import { AsyncStorage } from 'react-native';

import createNavigator from './routes';

export default class App extends Component {

  render() {

    const Routes = createNavigator()

    // return <Routes />

    return (

      <Routes />

    );
  }
}
