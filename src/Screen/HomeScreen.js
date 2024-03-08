import { ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appColors, globalStyles, height } from '../contants'
import { RowComponent, TextComponent } from '../Component'
import { ArrowRight } from 'iconsax-react-native'
import Feather from 'react-native-vector-icons/Feather'

const HomeScreen = () => {
    return (
        <ScrollView style={[globalStyles.container]}>
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
                            style={{
                                backgroundColor: appColors.white,
                                padding: 14,
                                borderRadius: 999
                            }}>
                            <Feather
                                name='shopping-cart'
                                size={24}
                                color={appColors.black} />
                        </TouchableOpacity>
                    </RowComponent>

                    <RowComponent>
                        <TextComponent text='Xem hàng mới về' size={16} style={{ lineHeight: 22, marginEnd: 4, fontWeight: '500' }} color={appColors.green} />
                        <ArrowRight size={24} color={appColors.green} />
                    </RowComponent>
                </View>
            </ImageBackground>
            
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