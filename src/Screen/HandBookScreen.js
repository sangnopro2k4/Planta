import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appColors, globalStyles, width } from '../contants'
import { RowComponent, TextComponent, ToolBarComponent } from '../Component'
import { ArrowLeft2 } from 'iconsax-react-native'
import { handbooks } from '../mock-data/handbooks'

const HandBookScreen = () => {

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{ marginBottom: 15 }}>
      <RowComponent>
        <Image style={styles.img} source={require('../assets/mock-images/plant1.png')} />
        <View style={{ marginStart: 15 }}>
          <TextComponent text={item.name} size={16} color={appColors.black} style={{ marginBottom: 5 }} />
          <TextComponent text={'Độ khó ' + item.difficult} size={14} color={appColors.gray} />
        </View>
      </RowComponent>
    </TouchableOpacity>
  )

  return (
    <View style={globalStyles.container}>
      <ToolBarComponent
        title='CẨM NANG CÂY TRỒNG'
        iconLeft={<ArrowLeft2 size={24} color={appColors.black} />}
      />

      <FlatList
        data={handbooks}
        renderItem={renderItem}
        style={{ paddingHorizontal: 48, paddingVertical: 15 }}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default HandBookScreen

const styles = StyleSheet.create({
  img: {
    width: width * 0.225,
    height: width * 0.225,
    borderRadius: 8,
    backgroundColor: '#F6F6F6'
  }
})