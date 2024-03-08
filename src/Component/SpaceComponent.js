import { View, Text } from 'react-native'
import React from 'react'

const SpaceComponent = (props) => {
    const { width, height, flex = 0 } = props

    return (
        <View style={{ width: width ?? 'auto', height: height ?? 'auto', flex: flex }}>
        </View>
    )
}

export default SpaceComponent