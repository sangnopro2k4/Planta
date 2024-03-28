import React from 'react'
import { StyleSheet, View } from 'react-native'

const RowComponent = (props) => {
    const { children, justify, style, flex = 0, width, height, alignItems } = props
    return (
        <View style={[styles.container,
        {
            alignItems: alignItems ?? 'center',
            justifyContent: justify ?? 'flex-start',
            flex: flex,
            width: width ?? 'auto',
            height: height ?? 'auto',
            padding: 0
        }, style]}>
            {children}
        </View>
    )
}

export default RowComponent

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
})