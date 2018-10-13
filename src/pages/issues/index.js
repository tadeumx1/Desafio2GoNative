import React, { Component } from 'react';
import api from 'services/api';
import { View, Text, TouchableOpacity, AsyncStorage, ActivityIndicator, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

import IssuesItem from './components/IssuesItem';

export default class Issues extends Component {

  static navigationOptions = {

    title: 'Issues',
    // header: null,

  }

  state = {

    data: [],
    loading: true,
    refreshing: false,
    errorMessage: null,
    issueType: ''

  }

  componentDidMount() {

    this.loadIssues();

  }

  handleIssueType = async (type) => {

    await this.setState({
      issueType: type,
      issues: [],

    });

  }

  loadIssues = async (stateIssue) => {

    this.setState({ refreshing: true });

    const { navigation } = this.props;
    const repository = navigation.getParam('repository', 'NEM VEIO NADA');

    if(stateIssue == "all") {

      const response = await api.get(`/repos/${repository.name}/${repository.owner.login}/issues?state=all`);

      console.log(response)

      this.setState({ 
        data: response.data, 
        loading: false,
        refreshing: false
      })

    }

    if(stateIssue == "open") {

      const response = await api.get(`/repos/${repository.name}/${repository.owner.login}/issues?state=open`);

      console.log(response)

      this.setState({ 
        data: response.data, 
        loading: false,
        refreshing: false
      })

    }

    if(stateIssue == "closed") {

      const response = await api.get(`/repos/${repository.name}/${repository.owner.login}/issues?state=closed`);

      console.log(response)

      this.setState({ 
        data: response.data,
        loading: false,
        refreshing: false
      })

    }

    else {

      const response = await api.get(`/repos/${repository.name}/${repository.owner.login}/issues?state=all`);

      console.log(response)

      this.setState({ 
        data: response.data, 
        loading: false,
        refreshing: false
      })

    }

  }

  renderListItem = ({ item }) => <IssuesItem issue={item} />

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

      { !!this.state.errorMessage 
        && <Text style={styles.error}>{this.state.errorMessage}</Text> }

        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.buttonFilter } onPress={() => {

            this.setState({ issueType: 'Todas' })

            this.loadIssues('all');

          }}>

            <Text style={ this.state.issueType == 'Todas' ? styles.text : null } >Todas</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonFilter } onPress={() => {

            this.setState({ issueType: 'Abertas' })

            this.loadIssues('open');

          }}>

            <Text style={ this.state.issueType == 'Abertas' ? styles.text : null }>Abertas</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonFilter} onPress={() => {

            this.setState({ issueType: 'Fechadas' })

            this.loadIssues('closed');

          }}>

            <Text style={ this.state.issueType == 'Fechadas' ? styles.text : null }>Fechadas</Text>

          </TouchableOpacity>

        </View>

        { this.state.loading
        ? <ActivityIndicator style={styles.loading} />
        : this.renderList() }

      </View>

    )
  }
}
