import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { metrics, colors } from 'styles';

import Repositories from 'pages/repositories';
import Issues from 'pages/issues';

import HeaderRight from 'components/HeaderRight';

const createNavigator = () => 

    createStackNavigator ({

        Repositories: { screen: Repositories },

        Issues: { screen: Issues },

    }, {

    // Caso ele estiver logado vai ser User senão vai ir
    // para a tela Welcome

    initialRouteName: 'Repositories',
    navigationOptions: ({ navigation }) => ({
        
        /* headerStyle: {

            paddingHorizontal: metrics.basePadding,

        }, */

        // headerRight: <HeaderRight navigation={navigation} />

        })

    });

export default createNavigator;