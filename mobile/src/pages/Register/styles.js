import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('100%'),
        height: 100,
    },
    img: {
        width: wp('22%'),
        height: hp('8%'),
        marginTop: hp('16%'),
        marginLeft: hp('7%'),
    },
    form: {
        backgroundColor: 'white',
        flex: 3,
        width:wp('75%')
    },
    label1: {
        fontWeight: 'bold',
        color: '#365478',
        fontSize: hp('2.2%'),
        marginTop: hp('1%')
    },
    label: {
        fontWeight: 'bold',
        color: '#365478',
        fontSize: hp('2.2%')
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#B2BABB',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        fontSize: hp('1.8%'),
        color: '#707B7C',
        height: hp('4.5%'),
        marginBottom: hp('2%'),
        borderRadius: 5,
    },
    button: {
        height: hp('6%'),
        backgroundColor: '#365478',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: hp('2%')
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonCancel: {
        marginTop: hp('1.5%'),
        height: hp('6%'),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#289cff'
    },
    OvalShapeView: {
        marginBottom: hp('2%'),
        width: wp('50%'),
        height: hp('33.4%'),
        borderRadius: 80,
        backgroundColor: '#365478',
        transform: [
            { scaleX: 2 }
        ]
    },
    images: {
        backgroundColor: '#B2BABB',
        marginTop: 37,
        width: hp('6%'),
        color: 'white',
        marginLeft: 40
    },
    circle: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        backgroundColor: '#B2BABB',
        marginTop:30,
    }
});