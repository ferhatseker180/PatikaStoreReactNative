import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    mainContainer : {
        flex : 1,
        backgroundColor: 'azure',
        margin : 10,
        borderWidth : 5,
        borderRadius : 6,
        padding : 10,
        borderColor : 'azure',
    },

    imageStyle : {
        height : Dimensions.get('window').height / 4,
        borderWidth : 2,
        borderRadius : 6,
        resizeMode : 'contain',
    },

    titleStyle : {
        fontSize : 18,
        fontWeight : 'bold',
        textAlign : 'center',
        margin : 2,
        color : 'black',
    },

    priceStyle : {
        fontSize : 16,
        fontWeight : '400',
        textAlign : 'center',
        margin : 2,
        color : 'grey',
    },

    stockStyle : {
        fontSize : 16,
        fontWeight : '400',
        textAlign : 'center',
        margin : 2,
        color : 'red',
    },

})