import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { plants } from '../mock-data/plants'
import { handbooks } from '../mock-data/handbooks'
import { appColors, globalStyles, height, width } from '../contants'
import { CollapseComponent, RowComponent, TextComponent, ToolBarComponent } from '../Component'
import { Add, ArrowDown2, ArrowLeft2, ArrowRight2, ArrowUp2, Minus } from 'iconsax-react-native'
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

      <View style={{ width: '100%', paddingHorizontal: 48, paddingVertical: 15, marginBottom: 15, flex: 1 }}>
        <RowComponent>
          <TextComponent text='Cây trồng' size={14} color={appColors.white} style={{ backgroundColor: appColors.green, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, marginEnd: 8 }} />
          <TextComponent text='Ưa bóng' size={14} color={appColors.white} style={{ backgroundColor: appColors.green, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, marginEnd: 8 }} />
        </RowComponent>

        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          {item.book.map((item, index) => (
            <View key={index} style={{ marginTop: 15 }}>
              <CollapseComponent title={item.namePart} titleStyle={{ fontWeight: '500' }}
                icon={isCollapse => isCollapse ? (<Add size={24} color={appColors.black} />) : (<Minus size={24} color={appColors.black} />)}>
                {item.contentPart.map((item, index) => (
                  <CollapseComponent key={index} title={index + '. ' + item.nameSection}
                    icon={isCollapse => isCollapse ? <ArrowDown2 size={24} color={appColors.black} /> : <ArrowUp2 size={24} color={appColors.black} />} >
                    <TextComponent text={item.contentSection} size={14} color={appColors.gray} />
                  </CollapseComponent>
                ))}
              </CollapseComponent>
              {index % 2 === 0 && <View style={{ borderTopWidth: 1, borderColor: 'green' }} />}
            </View>

          ))}
        </ScrollView>
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