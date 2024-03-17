import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { appColors, globalStyles, height, width } from '../contants'
import { ButtonComponent, CartItemComponent, TextComponent, ToolBarComponent } from '../Component'
import { ArrowLeft2, Bag, BagCross } from 'iconsax-react-native'
import { plantas } from '../mock-data/plants'

const CartScreen = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [idDelete, setIdDelete] = useState(-1)
  const [textDelete, setTextDelete] = useState('')

  const renderCart = ({ item }) => {
    return <CartItemComponent
      toggleBottomSheet={toggleBottomSheet}
      onChangeCheck={(check) => console.log(check)}
      {...item} />
  }

  const toggleBottomSheet = (key, id) => {
    switch (key) {
      case 'delete_1':
        setIdDelete(id)
        setTextDelete(`đơn hàng có id: ${id}`)
        break
      case 'delete_all':
        setTextDelete('tất cả đơn hàng')
        break
    }
    setIsOpen(!isOpen)
  }

  const handleData = () => {
    console.log('đã xóa ')
  }

  return (
    <View style={globalStyles.container}>
      <ToolBarComponent
        iconLeft={<ArrowLeft2 color={appColors.black} size={24} onPress={() => props.navigation.goBack()} />}
        title='GIỎ HÀNG'
        iconRight={<BagCross color={appColors.black} size={24} onPress={() => toggleBottomSheet('delete_all')} />}
      />

      <FlatList
        data={plantas}
        renderItem={renderCart}
        keyExtractor={item => item.id}
        ListEmptyComponent={<TextComponent text='Giỏ hàng của bạn hiện đang trống' size={14} color={appColors.blackLine} style={{ fontWeight: '400', alignSelf: 'center', paddingVertical: 15 }} />}
      />
      {

      }
      {
        isOpen && <>
          <Pressable onPress={toggleBottomSheet} style={styles.overlay} />
          <View style={styles.bottomSheet}>
            <TextComponent text={'Xác nhận xóa ' + textDelete} size={16} color={appColors.blackLine} style={{ fontWeight: '500', marginBottom: 8 }} />
            <TextComponent text='Thao tác này sẽ không thể khôi phục' />
            <ButtonComponent text={'Đồng ý'} width='100%'
              textStyle={{ color: appColors.white, fontWeight: '500', fontSize: 16 }}
              style={{ backgroundColor: appColors.greenMain, marginTop: 16, borderRadius: 4, marginBottom: 16 }}
              onPress={handleData}
            />
            <TextComponent
              onPress={toggleBottomSheet}
              text='Hủy bỏ' size={16} color={appColors.blackLine} style={{ fontWeight: '500', textDecorationLine: 'underline' }} />
          </View>
        </>
      }
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  bottomSheet: {
    padding: 24,
    bottom: 10,
    position: 'absolute',
    shadowColor: appColors.grayLight,
    elevation: 1,
    backgroundColor: 'white',
    zIndex: 1,
    borderRadius: 8,
    width: width * 0.9,
    alignSelf: 'center',
    alignItems: 'center'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  }
})