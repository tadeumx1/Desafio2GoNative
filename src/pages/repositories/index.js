import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from 'services/api';
import { View, Text, AsyncStorage, TextInput, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

import RepositoryItem from './components/RepositoryItem/index';

export default class Repositories extends Component {

  static navigationOptions = {

    title: 'Repositórios',
    tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={16} color={tintColor} />

  }

  state = {

    data: [],
    repository: '',
    loading: false,
    refreshing: false,

  }

  componentDidMount() {
    
    this.loadRepositories();

  }

  loadRepositories = async () => {

    try {

      const repositories = await AsyncStorage.getItem('@Gitissues:listRepositories');

      if (repositories !== null) {
        // We have data!!

        const listRepositories = JSON.parse(repositories);

        console.log(listRepositories);

        this.setState({ data: listRepositories })
      }

    } catch (error) {

      // Error saving data

    }

  }

  addRepositories = async () => {

    this.setState({ refreshing: true, loading: true });

    const repository = this.state.repository.trim().toLowerCase();

    const response = await api.get(`/repos/${repository}`);
    
    console.log(response)

    await this.setState({ 
      data: [response.data, ...this.state.data], 
      loading: false,
      refreshing: false
    })

    try {

      await AsyncStorage.setItem('@Gitissues:listRepositories', JSON.stringify(this.state.data));

    } catch (error) {

      // Error saving data

    }

  } 

  renderListItem = ({ item }) => <RepositoryItem navigation={this.props.navigation} repository={item} />

  renderList = () => (

    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.loadRepositories}
      refreshing={this.state.refreshing}
    />

  );

  render() {
    return (
        
      <View style={styles.container}>

       <View style={styles.buttonContainer}>

          <TextInput

            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid='rgba(0, 0, 0, 0)'
            value = {this.state.repository}
            onChangeText={repository => this.setState({ repository })}

          />

          <TouchableOpacity style={styles.button} onPress={this.addRepositories}>

            { this.state.loading
            ? <ActivityIndicator size="small" color='#FFF' />
            : <Text style={styles.buttonText}>+</Text> }

          </TouchableOpacity>

        </View>

        { this.state.loading
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList() }

      </View>

    );
  }
}
