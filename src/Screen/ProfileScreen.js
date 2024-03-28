import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appColors, globalStyles } from '../contants'
import { RowComponent, TextComponent, ToolBarComponent } from '../Component'

const ProfileScreen = () => {
  return (
    <View style={globalStyles.container}>
      <ToolBarComponent
        title='PROFILE'
      />

      <View style={{ paddingHorizontal: 48, paddingVertical: 15 }}>
        <RowComponent style={{ marginBottom: 15 }}>
          <View style={{ width: 39, height: 39, borderRadius: 999, backgroundColor: 'red', marginEnd: 26 }} />
          <View>
            <TextComponent text='Trần Minh Trí' size={16} color={appColors.black} />
            <TextComponent text='tranminhtri@gmail.com' size={14} color={appColors.gray} />
          </View>
        </RowComponent>

        <TextComponent text='Chung' size={16} color={appColors.gray} style={[{ marginBottom: 15, marginTop: 15 }, styles.underLine]} />
        <TextComponent text='Chỉnh sửa thông tin' size={16} color={appColors.black} style={{ marginBottom: 15 }} />
        <TextComponent text='Cẩm nang cây trồng' size={16} color={appColors.black} style={{ marginBottom: 15 }} />
        <TextComponent text='Lịch sử giao dịch' size={16} color={appColors.black} style={{ marginBottom: 15 }} />
        <TextComponent text='Q & A' size={16} color={appColors.black} style={{ marginBottom: 15 }} />

        <TextComponent text='Bảo mật và Điều khoản' size={16} color={appColors.gray} style={[{ marginBottom: 15, marginTop: 15 }, styles.underLine]} />
        <TextComponent text='Điều khoản và Điều kiện' size={16} color={appColors.black} style={{ marginBottom: 15 }} />
        <TextComponent text='Chính sách quyền riêng tư' size={16} color={appColors.black} style={{ marginBottom: 15 }} />
        <TextComponent text='Đăng xuất' size={16} color={appColors.red} style={{ marginBottom: 15 }} />
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  underLine: {
    borderColor: appColors.gray,
    borderBottomWidth: 1,
    paddingBottom: 5
  }
})