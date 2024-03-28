import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appColors, globalStyles, width } from '../contants'
import { TextComponent, ToolBarComponent } from '../Component'
import { ArrowLeft2 } from 'iconsax-react-native'

const EditProfile = () => {
  return (
    <>
      <View style={styles.container}>
        <ToolBarComponent
          iconLeft={<ArrowLeft2 size={24} color={appColors.black} />}
          title='CHỈNH SỬA THÔNG TIN' />

        <View style={{ width: width * 0.24, height: width * 0.24, borderRadius: width * 0.24, marginVertical: 24, backgroundColor: 'red' }} />
        <TextComponent
          text='Thông tin sẽ được lưu cho lần mua kế tiếp. Bấm vào thông tin chi tiết để chỉnh sửa'
          style={{ width: '100%', paddingHorizontal: 48, paddingVertical: 15 }}
          size={14}
          color={appColors.black}
        />
        <View style={{ paddingHorizontal: 48, paddingTop: 20, width: '100%' }}>
          <View style={{ marginBottom: 15 }}>
            <TextInput
              placeholderTextColor={appColors.grayLight}
              placeholder='Nhập họ tên'
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

      </View>
      <View style={{ width: '100%', paddingHorizontal: 24, paddingVertical: 15 }}>
        <TouchableOpacity style={[globalStyles.button, { paddingVertical: 10, backgroundColor: appColors.gray, borderRadius: 8 }]}>
          <TextComponent text='LƯU THÔNG TIN' size={16} color={appColors.white} />
        </TouchableOpacity>
      </View>
    </>

  )
}

export default EditProfile

const styles = StyleSheet.create({
  text: {
    ...globalStyles.text,
    fontSize: 14,
    color: appColors.grayLight
  },
  container: {
    ...globalStyles.container,
    alignItems: 'center'
  }
})