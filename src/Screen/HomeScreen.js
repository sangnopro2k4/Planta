import { ArrowRight } from 'iconsax-react-native'
import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { GridviewComponent, ProductComponent, RowComponent, TextComponent } from '../Component'
import { appColors, globalStyles, height } from '../contants'
import { plantas, plants } from '../mock-data/plants'
import { categories, getAllCategories, getProducts } from '../mock-data/data'

const product = getProducts(0, getAllCategories(categories, 1))
const tools = getProducts(2)

const HomeScreen = (props) => {

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={[globalStyles.container]}>
            <ImageBackground
                style={styles.bg}
                source={require('../assets/images/product-background.png')}>
                <View style={{ flex: 1, padding: 25, marginTop: 31, marginBottom: 7 }}>
                    <RowComponent width='100%' justify='space-between' alignItems='flex-start'>
                        <TextComponent
                            numLine={2}
                            text='Planta - toả sáng không gian nhà bạn'
                            size={24}
                            style={{ lineHeight: 37, width: '60%' }}
                            color={appColors.blackLine}
                        />
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('CartScreen')}
                            style={{
                                backgroundColor: appColors.white,
                                padding: 14,
                                borderRadius: 999
                            }}>
                            <Feather
                                name='shopping-cart'
                                size={24}
                                color={appColors.black}
                            />
                        </TouchableOpacity>
                    </RowComponent>

                    <RowComponent>
                        <TextComponent text='Xem hàng mới về' size={16} style={{ lineHeight: 22, marginEnd: 4, fontWeight: '500' }} color={appColors.green} />
                        <ArrowRight size={24} color={appColors.green} />
                    </RowComponent>
                </View>
            </ImageBackground>
            <View style={
                {
                    paddingHorizontal: 24,
                    paddingTop: 24,
                    flex: 1
                }
            }>
                <GridviewComponent
                    data={product}
                    renderItems={item => <ProductComponent {...item} />}
                    textNode={
                        <TextComponent text='Cây trồng'
                            color={appColors.blackLine}
                            size={24}
                            style={{ lineHeight: 34, fontWeight: '500' }}
                        />
                    }
                    col={2}
                    showCate
                    limitItem={4}
                    loadMoreText='Xem thêm cây trồng'
                    id={1}
                />

                <GridviewComponent
                    data={tools}
                    renderItems={item => <ProductComponent {...item} />}
                    textNode={
                        <TextComponent text='Chậu cây trồng'
                            color={appColors.blackLine}
                            size={24}
                            style={{ lineHeight: 34, fontWeight: '500' }}
                        />
                    }
                    col={2}
                    showCate
                    limitItem={4}
                    loadMoreText='Xem thêm phụ kiện'
                    id={2}
                />

            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    bg: {
        width: '100%',
        height: height * 0.375,
        resizeMode: 'stretch',
    }
})