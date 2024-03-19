import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { TextComponent } from '.'
import { appColors } from '../contants'
import { getNameCate } from '../mock-data/data'

const ProductComponent = (props) => {
  const { id, name, category_id, price, img } = props
  const cateName = getNameCate(category_id)
  return (
    <View style={styles.container}>
      <Image backgroundColor='#F6F6F6' style={styles.img} source={{ uri: img }} />
      <TextComponent
        text={name}
        size={16}
        color={appColors.blackLine}
        styles={{ lineHeight: 22, fontWeight: '500' }}
      />
      <TextComponent
        text={cateName}
        size={14}
        color={appColors.grayWeight}
        styles={{ lineHeight: 20, fontWeight: '400' }}
      />
      <TextComponent
        text={price}
        size={16}
        color={appColors.greenMain}
        styles={{ lineHeight: 22, fontWeight: '500' }}
      />
    </View>
  )
}

export default ProductComponent

const styles = StyleSheet.create({
  img: {
    width: '100%',
    minHeight: 140,
    resizeMode: 'contain',
    borderRadius: 10
  },
  container: {
    width: '100%',
    height: 'auto',
    padding: 10
  }
})