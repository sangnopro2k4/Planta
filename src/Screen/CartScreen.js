import { ArrowLeft2, BagCross } from 'iconsax-react-native'
import React, { useContext, useState } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from 'react-native-reanimated'
import { ButtonComponent, CartItemComponent, TextComponent, ToolBarComponent } from '../Component'
import { MyContext } from '../Component/MyProvider'
import { appColors, globalStyles, width } from '../contants'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const CartScreen = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [idDelete, setIdDelete] = useState(-1)
  const [textDelete, setTextDelete] = useState('')
  const { cart, setCart, cartMap } = useContext(MyContext)

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
        setIdDelete(-999)
        setTextDelete('tất cả đơn hàng')
        break
    }
    setIsOpen(!isOpen)
  }

  const handleData = () => {
    if (idDelete === -999) {
      cartMap.current.clear()
      setCart([])
      setIsOpen(!isOpen)
      setIdDelete(-1)
    } else if (idDelete) {
      cartMap.current.delete(idDelete)
      setCart([...cartMap.current.values()])
      setIsOpen(!isOpen)
      setIdDelete(-1)
    }
  }

  return (
    <View style={globalStyles.container}>
      <ToolBarComponent
        iconLeft={<ArrowLeft2 color={appColors.black} size={24} onPress={() => {
          setCart([...cartMap.current.values()])
          props.navigation.goBack()
        }} />}
        title='GIỎ HÀNG'
        iconRight={<BagCross color={appColors.black} size={24} onPress={() => toggleBottomSheet('delete_all')} />}
      />

      <FlatList
        data={cart}
        renderItem={renderCart}
        keyExtractor={item => item.id}
        ListEmptyComponent={<TextComponent text='Giỏ hàng của bạn hiện đang trống' size={14} color={appColors.blackLine} style={{ fontWeight: '400', alignSelf: 'center', paddingVertical: 15 }} />}
      />
      {
        //Button
      }
      {
        isOpen && <>
          <AnimatedPressable
            entering={FadeIn}
            exiting={FadeOut}
            onPress={toggleBottomSheet}
            style={styles.overlay} />
          <Animated.View style={styles.bottomSheet}
            entering={SlideInDown.springify().damping(15)}
            exiting={SlideOutDown}
          >
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
          </Animated.View>
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
    shadowColor: appColors.white,
    elevation: 10,
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