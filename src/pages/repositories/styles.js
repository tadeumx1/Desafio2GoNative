import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create ({

    container: {

        flex: 1,
    },

    loading: {

        marginTop: metrics.basePadding,

    },

    buttonContainer: {

        marginTop: 15,
        flexDirection: 'row',

    },

    button: {

        height: 44,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    input: {

        backgroundColor: colors.white,
        borderRadius: metrics.baseRadius,
        flex: 5,
        height: 44,
        marginLeft: 20,
        paddingHorizontal: metrics.basePadding

    },

    error: {

        color: colors.danger,
        textAlign: 'center',
        marginTop: metrics.baseMargin,

    },

    buttonText: {

        color: colors.black,
        fontWeight: 'bold',
        marginRight: 20,
        fontSize: 25,

    }

});

export default styles;