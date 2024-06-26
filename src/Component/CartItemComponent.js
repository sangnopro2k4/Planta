import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { RowComponent, TextComponent } from '.'
import { appColors, width } from '../contants'
import { AddSquare, MinusSquare } from 'iconsax-react-native'
import { MyContext } from './MyProvider'

const CartItemComponent = (props) => {
    const {
        name,
        id,
        price,
        img,
        quantity,
        stock,
        onChangeCheck,
        toggleBottomSheet,
        isCheck
    } = props
    const [isSelected, setIsSelected] = useState(isCheck)
    const [qty, setQty] = useState(quantity)
    const { cartMap, setCart } = useContext(MyContext)
    const item = useRef(cartMap.current.get(id))
    const handlerQuantity = (count) => {
        const newQty = qty + count
        if (newQty <= 0) {
            toggleBottomSheet('delete_1', id)
        } else if (newQty > stock) {
            console.log('giới hạn số lượng')
            return
        } else {
            console.log(item)
            item.current.quantity = newQty
            cartMap.current.set(id, item.current)
            setQty(newQty)
        }
    }

    return (
        <RowComponent width='100%' style={styles.wrapper}>
            <TouchableOpacity onPress={() => {
                setIsSelected(!isSelected)
                onChangeCheck(!isSelected)
                item.current.isCheck = !isSelected
                cartMap.current.set(id, item.current)
            }}
                style={{ marginEnd: 28 }}
            >
                <Icon name={isSelected ? 'checkbox-marked' : 'checkbox-blank-outline'} size={24} color={appColors.blackLine} />
            </TouchableOpacity>

            <Image style={styles.img} source={{ uri: img }} />

            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <TextComponent text={name + ' | '} size={16} color={appColors.blackLine} style={{ fontWeight: '500' }} >
                        <TextComponent text={'ưa bóng'} size={14} color={appColors.gray} />
                    </TextComponent>
                    <TextComponent text={price} size={16} color={appColors.green} style={{ fontWeight: '500' }} />
                </View>
                <RowComponent width='100%' justify='space-between'>
                    <RowComponent width={width * 0.23}>
                        <TouchableOpacity onPress={() => handlerQuantity(-1)}>
                            <MinusSquare size={20} color={appColors.blackLine} />
                        </TouchableOpacity>
                        <TextComponent text={qty} style={{ flex: 1, textAlign: 'center' }} color={appColors.blackLine} />
                        <TouchableOpacity onPress={() => handlerQuantity(1)}>
                            <AddSquare size={20} color={appColors.blackLine} />
                        </TouchableOpacity>
                    </RowComponent>
                    <TextComponent
                        onPress={() => toggleBottomSheet('delete_1', id)}
                        text='Xóa' color={appColors.blackLine} size={16} style={{ textDecorationLine: 'underline', fontWeight: '500' }} />
                </RowComponent>
            </View>
        </RowComponent>
    )
}

export default CartItemComponent

const styles = StyleSheet.create({
    img: {
        width: width * 0.21,
        height: width * 0.21,
        resizeMode: 'contain',
        backgroundColor: appColors.grayWeight,
        borderRadius: 8,
        marginEnd: 15
    },
    wrapper: {
        paddingHorizontal: 23,
        paddingVertical: 15,
        alignItems: 'center'
    }
})