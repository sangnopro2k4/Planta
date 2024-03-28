import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { plants } from '../mock-data/plants'
import { handbooks } from '../mock-data/handbooks'
import { appColors, globalStyles, height, width } from '../contants'
import { RowComponent, ToolBarComponent } from '../Component'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react-native'
import Swiper from 'react-native-swiper'

const DetailHandBookScreen = () => {
  const [index, setIndex] = useState(0)
  const slider = plants[0]
  const item = handbooks[0]

  return (
    <View style={globalStyles.container}>
      <ToolBarComponent title={item.name.toUpperCase()}
        iconLeft={<ArrowLeft2 size={24} color={appColors.black} />}
      />

      <View style={styles.swiper}>
        <Swiper
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
          {slider.listImage.map((image, index) => {
            return <Image source={image} style={styles.img} resizeMode='contain' key={index} backgroundColor='#F6F6F6' />
          })}
        </Swiper>
        <RowComponent height={height * 0.33} width={width} justify='space-between' style={{ position: 'absolute', top: 0, left: 0, padding: 10 }}>
          <TouchableOpacity
            onPress={() => {
              const i = index - 1
              if (i < 0) {
                setIndex(slider.listImage.length - 1)
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
              if (i > slider.listImage.length - 1) {
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
    </View>
  )
}

export default DetailHandBookScreen

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: height * 0.33,
  },
  swiper: {
    width: '100%',
    height: height * 0.33,
    backgroundColor: '#F6F6F6',
  },
})