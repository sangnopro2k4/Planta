import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../contants'

const TextComponent = (props) => {
    const { text, color, font, backgroundColor, size, style, type = 'text', onPress, children, numLine = 0, flex = 0 } = props
    return (
        <Text
            numberOfLines={numLine}
            onPress={onPress}
            style={[
                globalStyles.text,
                {
                    color: color,
                    fontFamily: font,
                    fontSize: size,
                    backgroundColor: backgroundColor,
                    flex: flex
                },
                style
            ]}>{text}{children}</Text>
    )
}

export default TextComponent

const styles = StyleSheet.create({})