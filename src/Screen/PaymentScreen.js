import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { appColors, globalStyles, width } from '../contants'
import { ButtonComponent, RowComponent, TextComponent, ToolBarComponent } from '../Component'
import { ArrowLeft2, InfoCircle } from 'iconsax-react-native'
import { paymentMethod, payments, transportMethods } from '../mock-data/data'
import Icon from 'react-native-vector-icons/Entypo'
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from 'react-native-reanimated'


const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const PaymentScreen = () => {
  const [seclectedTransport, setSeclectedTransport] = useState(transportMethods[0].id)
  const [seclectedPayment, setSeclectedPayment] = useState(paymentMethod[0].id)
  const [isPaymentAuthorization, setIsPaymentAuthorization] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const toggleBottomSheet = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <ScrollView style={globalStyles.container}>
        <ToolBarComponent
          title='Thanh Toán'
          iconLeft={<ArrowLeft2 size={24} color={appColors.black} />}
        />
        <View style={styles.paddingSection}>
          <TextComponent text='Thông tin khách hàng' color={appColors.black} size={16}
            style={[styles.underline, { borderColor: 'black', fontWeight: '500', marginBottom: 15 }]} />
          <View style={{ marginBottom: 15 }}>
            <TextInput
              value='Trần minh trí'
              editable={false}
              style={[styles.text, styles.underline]}
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <TextInput
              value='tranminhtri@gmail.com'
              editable={false}
              style={[styles.text, styles.underline]}
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <TextInput
              placeholderTextColor={appColors.grayLight}
              placeholder='Địa chỉ'
              style={[styles.text, styles.underline]}
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <TextInput
              placeholderTextColor={appColors.grayLight}
              placeholder='Số điện thoại'
              style={[styles.text, styles.underline]}
            />
          </View>
        </View>

        <View style={styles.paddingSection}>
          <TextComponent text='Phương thức vận chuyển' color={appColors.black} size={16}
            style={[styles.underline, { borderColor: 'black', fontWeight: '500', marginBottom: 15 }]} />
          {transportMethods.map(item => (
            <TouchableOpacity key={item.id} style={{ marginBottom: 15 }} onPress={() => setSeclectedTransport(item.id)}>
              <RowComponent justify='space-between' style={styles.underline}>
                <View>
                  <RowComponent>
                    <TextComponent text={item.name} color={seclectedTransport === item.id ? appColors.green : appColors.black} />
                    <TextComponent text={' - ' + item.price} color={seclectedTransport === item.id ? appColors.green : appColors.black} />
                  </RowComponent>
                  <TextComponent text='Dự kiến giao hàng 5 - 7/9' />
                </View>
                {seclectedTransport === item.id && <Icon name='check' color={appColors.green} size={24} />}
              </RowComponent>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.paddingSection}>
          <TextComponent text='Hình thức thanh toán' color={appColors.black} size={16}
            style={[styles.underline, { borderColor: 'black', fontWeight: '500', marginBottom: 15 }]} />
          {paymentMethod.map(item => (<TouchableOpacity key={item.id} style={{ marginBottom: 15 }} onPress={() => setSeclectedPayment(item.id)}>
            <RowComponent justify='space-between' style={styles.underline}>
              <TextComponent text={item.name} color={seclectedPayment === item.id ? appColors.green : appColors.black} />
              {seclectedPayment === item.id && <Icon name='check' color={appColors.green} size={24} />}
            </RowComponent>
          </TouchableOpacity>))}
        </View>

        <View style={styles.paddingSection}>
          <TextComponent text='Nhập thông tin thẻ' color={appColors.black} size={16}
            style={[styles.underline, { borderColor: 'black', fontWeight: '500', marginBottom: 15 }]} />
          <View style={{ marginBottom: 15 }}>
            <TextInput
              placeholderTextColor={appColors.grayLight}
              placeholder='Nhập số thẻ'
              style={[styles.text, styles.underline]}
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <TextInput
              placeholderTextColor={appColors.grayLight}
              placeholder='Tên chủ thẻ'
              style={[styles.text, styles.underline]}
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <TextInput
              placeholderTextColor={appColors.grayLight}
              placeholder='Ngày hết hạn (MM/YY)'
              style={[styles.text, styles.underline]}
            />
          </View>
          <RowComponent justify='space-between' style={[{ marginBottom: 15 }]} width='75%'>
            <TextInput
              placeholderTextColor={appColors.grayLight}
              placeholder='CVV'
              style={[styles.text, { width: '100%' }, styles.underline]}
            />
            <InfoCircle size={24} color={appColors.gray} style={{ position: 'absolute', end: 0 }} />
          </RowComponent>
        </View>

        <View style={styles.paddingSection}>
          <RowComponent justify='space-between' style={[styles.underline, { marginBottom: 15, borderColor: appColors.black }]}>
            <TextComponent text='Thông tin khách hàng' color={appColors.black} size={16} />
            <TextComponent text='chỉnh sửa' color={appColors.gray} size={14} />
          </RowComponent>
          <View style={{ marginBottom: 15 }}>
            <TextInput
              placeholderTextColor={appColors.grayLight}
              placeholder='Nhập tên'
              value='Trần Minh Trí'
              style={[styles.text, { padding: 0 }]}
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <TextInput
              placeholderTextColor={appColors.grayLight}
              placeholder='Nhập email'
              value='tranminhtri@gmail.com'
              style={[styles.text, { padding: 0 }]}
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <TextInput
              placeholderTextColor={appColors.grayLight}
              placeholder='Nhập địa chỉ'
              value='60 Láng hạ, Ba đình, Hà nội'
              style={[styles.text, { padding: 0 }]}
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <TextInput
              placeholderTextColor={appColors.grayLight}
              placeholder='Nhập số điện thoại'
              value='0123456789'
              style={[styles.text, { padding: 0 }]}
            />
          </View>
        </View>

        <View style={styles.paddingSection}>
          <RowComponent justify='space-between' style={[styles.underline, { marginBottom: 15, borderColor: appColors.black }]}>
            <TextComponent text='Phương thức vận chuyển' color={appColors.black} size={16} />
            <TextComponent text='chỉnh sửa' color={appColors.gray} size={14} />
          </RowComponent>
        </View>

        <View style={styles.paddingSection}>
          <RowComponent justify='space-between' style={[styles.underline, { marginBottom: 15, borderColor: appColors.black }]}>
            <TextComponent text='Hình thức thanh toán' color={appColors.black} size={16} />
            <TextComponent text='chỉnh sửa' color={appColors.gray} size={14} />
          </RowComponent>
        </View>
      </ScrollView>


      {
        isOpen ? <>
          <AnimatedPressable
            entering={FadeIn}
            exiting={FadeOut}
            onPress={toggleBottomSheet}
            style={styles.overlay} />
          <Animated.View style={styles.bottomSheet}
            entering={SlideInDown.springify().damping(15)}
            exiting={SlideOutDown}
          >
            <TextComponent text={'Xác nhận thanh toán'} size={16} color={appColors.blackLine} style={{ fontWeight: '500', marginBottom: 8 }} />
            <ButtonComponent text={'Đồng ý'} width='100%'
              textStyle={{ color: appColors.white, fontWeight: '500', fontSize: 16 }}
              style={{ backgroundColor: appColors.greenMain, marginTop: 16, borderRadius: 4, marginBottom: 16 }}
            />
            <TextComponent
              onPress={toggleBottomSheet}
              text='Hủy bỏ' size={16} color={appColors.blackLine} style={{ fontWeight: '500', textDecorationLine: 'underline' }} />
          </Animated.View>
        </>
          : <View style={{ paddingVertical: 15, paddingHorizontal: 24, width: '100%' }}>
            <RowComponent justify='space-between'>
              <TextComponent text='Tạm tính' color={appColors.gray} />
              <TextComponent text='500.000đ' color={appColors.black} />
            </RowComponent>
            <RowComponent justify='space-between'>
              <TextComponent text='Phí vận chuyển' color={appColors.gray} />
              <TextComponent text='15.000đ' color={appColors.black} />
            </RowComponent>
            <RowComponent justify='space-between'>
              <TextComponent text='Tổng cộng' color={appColors.gray} />
              <TextComponent text='515.000đ' color={appColors.black} />
            </RowComponent>
            <TouchableOpacity onPress={toggleBottomSheet} style={[globalStyles.button, { backgroundColor: appColors.gray, borderRadius: 8, marginTop: 8 }]}>
              <TextComponent text='TIẾP TỤC' color={appColors.white} />
            </TouchableOpacity>
          </View>
      }
    </>
  )
}

export default PaymentScreen

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
  },
  text: {
    ...globalStyles.text,
    fontSize: 14,
    color: appColors.grayLight
  },
  underline: {
    borderColor: appColors.grayLight,
    borderBottomWidth: 1,
    padding: 0,
    paddingBottom: 5
  },
  paddingSection: {
    paddingHorizontal: 48,
    paddingTop: 15
  }
})