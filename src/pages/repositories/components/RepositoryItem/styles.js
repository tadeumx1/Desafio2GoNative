import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({

    container: {

        // Herança de estilos em React native

        // Estamos copiando todos os estilos de box para isso

        ...general.box,
        flex: 1,
        marginHorizontal: metrics.basePadding,
        marginTop: metrics.baseMargin,
        flexDirection: 'row',

    },

    repoTitle: {

        fontWeight: 'bold',
        color: '#333333',
        fontSize: 16,

    },

    infoContainer: {

        flexDirection: 'column',
        flex: 3,
        marginLeft: 11,

    },

    image: {

        height: 45,
        width: 45,

    },

    info: {

        flexDirection: 'column',
        marginRight:  metrics.baseMargin,

    },

    infoIcon: {

        color: colors.dark,
        alignSelf: 'center',   
    },

    infoText: {

        color: '#999999',
        fontSize: 12,
        // marginLeft: metrics.baseMargin / 2,

    }

});

export default styles;