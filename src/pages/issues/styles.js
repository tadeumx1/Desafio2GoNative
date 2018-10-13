import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create ({

    container: {

        flex: 1,
        backgroundColor: '#EEEEEE'

    },

    loading: {

        marginTop: metrics.basePadding,

    },

    buttonContainer: {

        marginTop: 15,
        marginRight: 20,
        marginLeft: 20,
        flexDirection: 'row',
        backgroundColor: '#DDDDDD',
        alignItems: 'center',
        justifyContent: 'center',

    },

    buttonFilterSelected: {

       backgroundColor: '#666666',
       margin: 5,
       flex: 0.3,
       alignItems: 'center',
       padding: 5,

    },

    buttonFilter: {

        backgroundColor: '#DDDDDD',
        margin: 5,
        flex: 0.3,
        alignItems: 'center',
        padding: 5,
 
    },

    text: {

        fontWeight:  'bold',

    },

    button: {

        backgroundColor: colors.primary,
        borderRadius: metrics.baseRadius,
        height: 44,
        paddingHorizontal: metrics.basePadding,
        marginTop: metrics.baseMargin,
        justifyContent: 'center',
        alignItems: 'center',

    },

    input: {

        backgroundColor: colors.white,
        borderRadius: metrics.baseRadius,
        height: 44,
        paddingHorizontal: metrics.basePadding

    },

    error: {

        color: colors.danger,
        textAlign: 'center',
        marginTop: metrics.baseMargin,

    },

    buttonText: {

        color: colors.white,
        fontWeight: 'bold',
        fontSize: 14,

    }

});

export default styles;