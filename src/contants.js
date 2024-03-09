import { Dimensions, StatusBar, StyleSheet } from "react-native"

export const appColors = {
    black: '#000000',
    gray: '#8B8B8B',
    green: '#009245',
    white: '#FFFFFF',
    red: '#CE0000',
    grayLight: '#ABABAB',
    greenMain: '#007537',
    blackLine: '#221F1F',
    grayWeight: '#7D7B7B',
    redLight: '#FF0000'
}


export const globalStyles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'black'
    },
    button: {
        width: '100%',
        height: 'auto',
        paddingVertical: 10,
        borderRadius: 15
    },
    label: {
        color: 'black',
        fontFamily: 'Poppins',
        fontSize: 30,
        fontWeight: '700',
        fontStyle: 'normal'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})

const { width, height } = Dimensions.get('window')
const statusBarHeight = StatusBar.currentHeight
export { width, height, statusBarHeight }