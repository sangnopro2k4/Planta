import { View, Text } from 'react-native'
import React from 'react'
import { appColors, statusBarHeight } from '../contants'
import { SpaceComponent, TextComponent } from '.'

const ToolBarComponent = (props) => {
    const {
        iconLeft,
        title,
        iconRight } = props
    return (
        <View style={{ marginTop: statusBarHeight, paddingHorizontal: 24, flexDirection: 'row', minHeight: 55, width: '100%', alignItems: 'center' }}>
            {iconLeft ? iconLeft : <SpaceComponent width={24} />}
            <TextComponent text={title} color={appColors.black} size={16} style={{ flex: 1, textAlign: 'center', fontWeight: '500' }} />
            {iconRight ? iconRight : <SpaceComponent width={24} />}
        </View>
    )
}

export default ToolBarComponent