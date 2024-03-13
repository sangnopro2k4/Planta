import { AddSquare, ArrowLeft2, ArrowRight2, MinusSquare, ShoppingCart, } from 'iconsax-react-native'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Swiper from 'react-native-swiper'
import { ButtonComponent, RowComponent, TextComponent, ToolBarComponent } from '../Component'
import { appColors, globalStyles, height } from '../contants'
import { plants } from '../mock-data/plants'

const DetailScreen = (props) => {
    const {navigation} = props
    const mock = plants[0]
    return (
        <View style={globalStyles.container}>
            <ToolBarComponent
                title={mock.name}
                iconLeft={<ArrowLeft2 color={appColors.black} size={24} onPress={() => navigation.goBack()} />}
                iconRight={<ShoppingCart color={appColors.black} size={24} />}
            />
            <View style={styles.swiper}>
                <Swiper
                    height={'auto'}
                    autoplay
                    showsButtons
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
                    nextButton={
                        <View style={{ backgroundColor: appColors.white, borderRadius: 999, padding: 2 }}>
                            <ArrowRight2 size={24} color={appColors.black} />
                        </View>
                    }
                    prevButton={
                        <View style={{ backgroundColor: appColors.white, borderRadius: 999, padding: 2 }}>
                            <ArrowLeft2 size={24} color={appColors.black} />
                        </View>
                    }

                    buttonWrapperStyle={
                        {
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                            flex: 1,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            alignSelf: 'center'
                        }
                    }
                >
                    {mock.listImage.map((image, index) => {
                        return <Image source={image} style={styles.img} resizeMode='contain' key={index} backgroundColor='#F6F6F6' />
                    })}
                </Swiper>
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
                        <TextComponent text='Nhỏ'
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
                        <TextComponent text='Châu phi'
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
                        <TextComponent text={'156' + 'sp'}
                            color={appColors.green}
                            size={14}
                        />
                    </RowComponent>
                </View>
            </View>
            <View>
                <View style={{ paddingHorizontal: 24, paddingBottom: 14 }}>
                    <RowComponent justify='space-between' style={{ marginBottom: 7 }}>
                        <TextComponent text={`Đã chọn 1 sản phẩm`}
                            size={14}
                            color={appColors.black}
                        />
                        <TextComponent text='Tạm tính'
                            size={14}
                            color={appColors.black} />
                    </RowComponent>
                    <RowComponent style={{ marginBottom: 12 }}>
                        <RowComponent flex={1}>
                            <MinusSquare size={30} color={appColors.blackLine} />
                            <TextComponent text='1' flex={1} style={{ textAlign: 'center' }} size={16} color={appColors.blackLine} />
                            <AddSquare size={30} color={appColors.blackLine} />
                        </RowComponent>
                        <TextComponent text='250.000 VND' style={{ flex: 2, textAlign: 'right', fontWeight: '500' }} size={24} color={appColors.blackLine} />
                    </RowComponent>
                    <ButtonComponent
                        text='CHỌN MUA'
                        style={{
                            backgroundColor: appColors.greenMain,
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
    }
})