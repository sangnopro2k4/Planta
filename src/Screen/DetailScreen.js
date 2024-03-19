import { AddSquare, ArrowLeft2, ArrowRight2, MinusSquare, ShoppingCart, } from 'iconsax-react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Entypo'
import { ButtonComponent, RowComponent, TextComponent, ToolBarComponent } from '../Component'
import { MyContext } from '../Component/MyProvider'
import { appColors, globalStyles, height, width } from '../contants'
import { getDetailProduct } from '../mock-data/data'
import { plants } from '../mock-data/plants'

const DetailScreen = (props) => {
    const { navigation } = props
    const { id } = props.route.params
    const product = getDetailProduct(id)
    const [total, setTotal] = useState(product.price)
    const [count, setCount] = useState(1)
    const [isDisable, setIsDisable] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [index, setIndex] = useState(0)
    const mock = plants[0]
    const { cart, setCart, cartMap } = useContext(MyContext)

    const handle = (_c) => {
        const newCount = count + _c
        if (newCount < 1) {
            setCount(0)
            setIsDisable(true)
            return
        } else if (newCount > product.quantity)
            return
        setCount(newCount)
        setIsDisable(false)
    }

    useEffect(() => {
        setTotal(count * product.price)
    }, [count])

    const addToCart = () => {
        const newItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            stock: product.quantity,
            quantity: 1,
            img: product.img,
            isCheck: false
        }

        if (!cartMap.current.has(newItem.id)) {
            cartMap.current.set(newItem.id, newItem)
        } else {
            const existItem = cartMap.current.get(newItem.id)
            existItem.quantity++
            cartMap.current.set(newItem.id, existItem)
        }

        setCart([...cartMap.current.values()])

        setIsSuccess(true)
        setTimeout(() => {
            setIsSuccess(false)
        }, 1000)
    }

    console.log(index)
    return (
        <View style={globalStyles.container}>
            <ToolBarComponent
                title={product.name}
                iconLeft={<ArrowLeft2 color={appColors.black} size={24} onPress={() => navigation.goBack()} />}
                iconRight={<ShoppingCart color={appColors.black} size={24} onPress={() => addToCart()} />}
            />
            <View style={styles.swiper}>
                <Swiper
                    height={'auto'}
                    index={index}
                    paginationStyle={{
                        bottom: 8
                    }}
                    dot={
                        <View
                            style={{
                                backgroundColor: appColors.grayLight,
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                marginLeft: 3,
                                marginRight: 3,
                                marginTop: 3,
                                marginBottom: 3
                            }}
                        />
                    }
                    activeDot={
                        <View
                            style={{
                                backgroundColor: appColors.blackLine,
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                marginLeft: 3,
                                marginRight: 3,
                                marginTop: 3,
                                marginBottom: 3
                            }}
                        />
                    }
                >
                    {mock.listImage.map((image, index) => {
                        return <Image source={image} style={styles.img} resizeMode='contain' key={index} backgroundColor='#F6F6F6' />
                    })}
                </Swiper>
                <RowComponent height={height * 0.33} width={width} justify='space-between' style={{ position: 'absolute', top: 0, left: 0, padding: 10 }}>
                    <TouchableOpacity
                        onPress={() => {
                            const i = index - 1
                            if (i < 0) {
                                setIndex(mock.listImage.length - 1)
                            } else {
                                setIndex(i)
                            }
                        }}
                        style={{ backgroundColor: appColors.white, borderRadius: 999, padding: 2 }}>
                        <ArrowLeft2 size={24} color={appColors.black} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            const i = index + 1
                            if (i > mock.listImage.length - 1) {
                                setIndex(0)
                            } else {
                                setIndex(i)
                            }
                        }}
                        style={{ backgroundColor: appColors.white, borderRadius: 999, padding: 2 }}>
                        <ArrowRight2 size={24} color={appColors.black} />
                    </TouchableOpacity>
                </RowComponent>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 48, paddingVertical: 15 }}>
                <RowComponent style={{ marginBottom: 15 }}>
                    <TextComponent
                        text='Cây trồng'
                        color={appColors.white}
                        style={{
                            backgroundColor: appColors.greenMain,
                            paddingHorizontal: 8,
                            paddingVertical: 4,
                            borderRadius: 4,
                            marginEnd: 8,
                            lineHeight: 20
                        }}
                        size={14}
                    />

                    <TextComponent
                        text='Ưa bóng'
                        color={appColors.white}
                        style={{
                            backgroundColor: appColors.greenMain,
                            paddingHorizontal: 8,
                            paddingVertical: 4,
                            borderRadius: 4,
                            marginEnd: 8,
                            lineHeight: 20
                        }}
                        size={14}
                    />
                </RowComponent>
                <TextComponent text='250.000 VND' color={appColors.greenMain} size={24} style={{ fontWeight: '500', lineHeight: 34 }} />
                <View style={{ flex: 1, marginTop: 15 }}>
                    <TextComponent
                        text='Chi tiết sản phẩm'
                        color={appColors.black}
                        size={16}
                        style={{ lineHeight: 22, fontWeight: '500', borderBottomWidth: 1, paddingBottom: 4, marginBottom: 15 }}
                    />
                    <RowComponent
                        justify='space-between'
                        style={
                            {
                                borderBottomWidth: 1,
                                marginBottom: 15,
                                paddingBottom: 4,
                                borderColor: appColors.grayLight
                            }
                        }
                    >
                        <TextComponent text='Kích cỡ'
                            color={appColors.black}
                            size={14}
                        />
                        <TextComponent text={product.size}
                            color={appColors.black}
                            size={14}
                        />
                    </RowComponent>
                    <RowComponent
                        justify='space-between'
                        style={
                            {
                                borderBottomWidth: 1,
                                marginBottom: 15,
                                paddingBottom: 4,
                                borderColor: appColors.grayLight
                            }
                        }
                    >
                        <TextComponent text='Xuất xứ'
                            color={appColors.black}
                            size={14}
                        />
                        <TextComponent text={product.origin}
                            color={appColors.black}
                            size={14}
                        />
                    </RowComponent>
                    <RowComponent
                        justify='space-between'
                        style={
                            {
                                borderBottomWidth: 1,
                                marginBottom: 15,
                                paddingBottom: 4,
                                borderColor: appColors.grayLight
                            }
                        }
                    >
                        <TextComponent text='Tình trạng'
                            color={appColors.black}
                            size={14}
                        />
                        <TextComponent text={product.quantity + 'sp'}
                            color={appColors.green}
                            size={14}
                        />
                    </RowComponent>
                </View>
            </View>
            <View>
                <View style={{ paddingHorizontal: 24, paddingBottom: 14 }}>
                    <RowComponent justify='space-between' style={{ marginBottom: 7 }}>
                        <TextComponent text={`Đã chọn ${count} sản phẩm`}
                            size={14}
                            color={appColors.black}
                        />
                        <TextComponent text='Tạm tính'
                            size={14}
                            color={appColors.black} />
                    </RowComponent>
                    <RowComponent style={{ marginBottom: 12 }}>
                        <RowComponent flex={1}>
                            <TouchableOpacity onPress={() => handle(-1)}>
                                <MinusSquare size={30} color={appColors.blackLine} />
                            </TouchableOpacity>
                            <TextComponent text={count} flex={1} style={{ textAlign: 'center' }} size={16} color={appColors.blackLine} />
                            <TouchableOpacity onPress={() => handle(1)}>
                                <AddSquare size={30} color={appColors.blackLine} />
                            </TouchableOpacity>
                        </RowComponent>
                        <TextComponent text={total + '$'} style={{ flex: 2, textAlign: 'right', fontWeight: '500' }} size={24} color={appColors.blackLine} />
                    </RowComponent>
                    <ButtonComponent
                        isDisable={isDisable}
                        onPress={() => console.log('Mua sản phẩm')}
                        text='CHỌN MUA'
                        style={{
                            backgroundColor: isDisable ? appColors.gray : appColors.greenMain,
                            borderRadius: 8,
                            paddingVertical: 10
                        }}
                        textStyle={{
                            color: appColors.white,
                            fontWeight: '500',
                            fontSize: 16,
                        }}
                    />
                </View>
            </View>
            {
                isSuccess &&
                <>
                    <Animated.View
                        style={styles.overlay}
                        entering={FadeIn}
                        exiting={FadeOut}
                    >
                        <Icon name='check' color={appColors.white} size={50} />
                        <TextComponent text='Đã thêm sản phẩm vào giỏ hàng' size={20} color={appColors.white} />
                    </Animated.View>
                </>

            }
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    swiper: {
        width: '100%',
        height: height * 0.33,
        backgroundColor: '#F6F6F6',
    },
    img: {
        width: '100%',
        height: height * 0.33,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})