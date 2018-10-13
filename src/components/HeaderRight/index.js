import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import { TouchableOpacity, AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class HeaderRight extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static propTypes = {

    navigation: PropTypes.shape({

        dispatch: PropTypes.func,

    }).isRequired,

  }

  signOut = async () => {

    // Deslogar usuário

    await AsyncStorage.clear();

    const resetAction = NavigationActions.reset ({

        index: 0,
        actions: [

            NavigationActions.navigate({ routeName: 'Welcome' }),

        ]

    });

    this.props.navigation.dispatch(resetAction);

  }

  render() {
    return (

        <TouchableOpacity onPress={this.signOut}>

            <Icon name="exchange" size={16} style={styles.icon} />

        </TouchableOpacity>

    );
  }
}
