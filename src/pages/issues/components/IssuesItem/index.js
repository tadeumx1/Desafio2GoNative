import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const IssuesItem = ({ issue }) => (

    <TouchableOpacity onPress={() => {

        alert("Oi")

    }}>

    <View style={styles.container}>

        <Image source={{uri: issue.user.avatar_url }} style={styles.image} />

        <View style={styles.infoContainer}>

            <Text style={styles.repoTitle}>{issue.title}</Text>
        
            <Text style={styles.infoText}>{issue.user.login}</Text>
            
        </View>

        <Icon name="angle-right" size={20} style={styles.infoIcon} />

    </View>

    </TouchableOpacity>
    
);

IssuesItem.propTypes = {

    issue: PropTypes.shape({

        title: PropTypes.string,

        user: PropTypes.shape({

            avatar_url: PropTypes.string,
            login: PropTypes.string,

        }).isRequired

    }).isRequired,

}

export default IssuesItem;
