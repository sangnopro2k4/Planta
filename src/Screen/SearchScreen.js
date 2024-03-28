import { ArrowLeft2, SearchNormal1, Timer1 } from 'iconsax-react-native'
import React from 'react'
import { FlatList, Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { RowComponent, TextComponent, ToolBarComponent } from '../Component'
import { appColors, globalStyles, width } from '../contants'
import Icon from 'react-native-vector-icons/AntDesign'

const SearchScreen = () => {

    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ paddingVertical: 15 }}>
            <RowComponent>
                <Image style={styles.img} source={require('../assets/mock-images/plant1.png')} />
                <View style={{ flex: 1 }}>
                    <TextComponent text='Parse đen' size={16} color={appColors.black} style={{ lineHeight: 22, fontWeight: '400' }}> {' | '}
                        <TextComponent text='Hybrid' size={16} color={appColors.black} style={{ lineHeight: 22, fontWeight: '400' }} />
                    </TextComponent>
                    <TextComponent text='250.000đ' size={16} color={appColors.black} style={{ lineHeight: 22, fontWeight: '400' }} />
                    <TextComponent text='Còn 165 sp' size={16} color={appColors.black} style={{ lineHeight: 22, fontWeight: '400' }} />
                </View>
            </RowComponent>
        </TouchableOpacity>
    )

    return (
        <View style={globalStyles.container}>
            <ToolBarComponent
                iconLeft={<ArrowLeft2 size={24} color={appColors.black} />}
                title='TÌM KIẾM'
            />

            <RowComponent style={{ marginHorizontal: 48, marginBottom: 40 }}>
                <TextInput
                    placeholder='Tìm kiếm'
                    placeholderTextColor={appColors.gray}
                    style={{ borderColor: appColors.black, borderBottomWidth: 1, padding: 0, width: '100%', fontSize: 16 }}
                />
                <SearchNormal1 size={24} color={appColors.black} style={{ position: 'absolute', right: 0 }} />
            </RowComponent>

            {/* <FlatList
                style={{ marginHorizontal: 48 }}
                ListEmptyComponent={(
                    <View>
                        <TextComponent text='Tìm kiếm gần đây' size={16} color={appColors.black} style={{ marginBottom: 19 }} />
                        <TouchableOpacity style={{ marginBottom: 19 }}>
                            <RowComponent>
                                <Timer1 size={24} color={appColors.gray} />
                                <TextComponent text='Spider Plant' size={16} color={appColors.black} style={{ flex: 1, marginHorizontal: 10 }} />
                                <Icon name='close' size={24} color={appColors.black} />
                            </RowComponent>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <RowComponent>
                                <Timer1 size={24} color={appColors.gray} />
                                <TextComponent text='Spider Plant' size={16} color={appColors.black} style={{ flex: 1, marginHorizontal: 10 }} />
                                <Icon name='close' size={24} color={appColors.black} />
                            </RowComponent>
                        </TouchableOpacity>
                    </View>
                )}
            /> */}

            {renderItem({})}
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    img: {
        width: width * 0.225,
        height: width * 0.225,
        resizeMode: 'contain',
        backgroundColor: '#F6F6F6',
        marginEnd: 15,
        borderRadius: 8
    }
})