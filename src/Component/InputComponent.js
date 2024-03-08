import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { appColors } from '../contants'
import Icon from 'react-native-vector-icons/Ionicons';


const InputComponent = (props) => {

    const {
        value,
        onChange,
        placeHolder,
        isPassword = false,
        placeHolderColor,
        borderStyle,
        isIcon,
        icon,
        borderColorFocus,
    } = props

    const borderColor = borderStyle?.borderColor ?? appColors.gray

    const [secure, setSecure] = useState(isPassword)
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <View style={[styles.input, styles.borderStyle, borderStyle, isFocused ? { borderColor: borderColorFocus, borderWidth: 2} : {}]}>
            <TextInput
                value={value}
                onChangeText={onChange}
                placeholder={isFocused ? '' : placeHolder}
                placeholderTextColor={placeHolderColor ?? appColors.black}
                secureTextEntry={secure}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{ flex: 1, }}
            />
            {isPassword && (<TouchableOpacity>
                <Icon name={secure ? 'eye' : 'eye-off'} onPress={() => setSecure(!secure)} size={20} color={appColors.gray} />
            </TouchableOpacity>)}
            {isIcon && icon}
        </View>
    )
}

export default InputComponent

const styles = StyleSheet.create({
    input: {
        width: '100%',
        minheight: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 14,
        marginBottom: 10
    },
    borderStyle: {
        borderWidth: 1,
        borderColor: appColors.gray,
        borderRadius: 10
    }
})