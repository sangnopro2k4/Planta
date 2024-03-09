import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextComponent } from '.'
import { globalStyles } from '../contants'

const ButtonComponent = (props) => {
    const {text, textStyle, style, width, height, onPress} = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                globalStyles.button,
                {
                    width: width ?? 'auto',
                    height: height ?? 'auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                style
            ]}>
            <TextComponent style={textStyle} text={text} />
        </TouchableOpacity>
    )
}

export default ButtonComponent