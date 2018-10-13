import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const RepositoryItem = ({ navigation, repository }) => (

    <TouchableOpacity onPress={() => { 

        navigation.navigate('Issues', {
            repository: repository,
          });

    }}>

    <View style={styles.container}>

        <Image source={{uri: repository.owner.avatar_url }} style={styles.image} />

        <View style={styles.infoContainer}>

            <Text style={styles.repoTitle}>{repository.name}</Text>
        
            <Text style={styles.infoText}>{repository.owner.login}</Text>
            
        </View>

        <Icon name="angle-right" size={20} style={styles.infoIcon} />

    </View>

    </TouchableOpacity>
);

RepositoryItem.propTypes = {

    repository: PropTypes.shape({

        name: PropTypes.string,

        owner: PropTypes.shape({

            login: PropTypes.string,
            avatar_url: PropTypes.string

        }).isRequired

    }).isRequired,

}

export default RepositoryItem;
