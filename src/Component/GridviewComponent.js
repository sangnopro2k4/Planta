import React, { useState, useContext } from 'react'
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native'
import { TextComponent } from '.'
import { appColors } from '../contants'
import { NavigationContext } from '@react-navigation/native'

const GridviewComponent = (props) => {
    const { data, renderItems, col, textNode, style, loadMore, loadMoreText, limitItem } = props
    const [plants, setPlants] = useState(data.slice(0, limitItem))
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useContext(NavigationContext)
    
    const handleData = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            const numOfEle = data.length - plants.length - limitItem
            const size = numOfEle < limitItem ? data.length - plants.length : limitItem
            setPlants([...data.slice(0, plants.length + size)])
        }, 2000)
    }

    return (
        <View style={style}>
            {textNode}
            <View style={styles.container}>
                {plants.map((item) => {
                    return (<TouchableOpacity onPress={() => navigation.navigate('DetailScreen')} key={item.id} style={{ width: 100 / col + '%' }}>
                        {renderItems(item)}
                    </TouchableOpacity>)
                })}
            </View>
            {data.length != plants.length && !isLoading && loadMore && <TextComponent
                onPress={() => handleData()}
                text={loadMoreText}
                size={16}
                color={appColors.blackLine}
                style={{
                    textDecorationLine: 'underline',
                    fontWeight: '500',
                    alignSelf: 'flex-end',
                    marginBottom: 32
                }} />}
            {
                isLoading && <ActivityIndicator
                    size="small"
                    color={appColors.black}
                    style={{
                        alignSelf: 'center',
                        marginBottom: 32
                    }} />
            }
        </View>

    )
}

export default GridviewComponent

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 17
    }
})