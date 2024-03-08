import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { appColors, globalStyles, height, width } from '../contants'
import { InputComponent, TextComponent, RowComponent, SpaceComponent } from '../Component'
import LinearGradient from 'react-native-linear-gradient'
import Google from '../assets/svgs/google'
import Facebook from '../assets/svgs/facebook'

const initProfile = {
    name: '',
    email: '',
    phonenumber: '',
    password: '',
}

const SignupScreen = ({ navigation }) => {
    const [profile, setprofile] = useState(initProfile)

    const handleValue = (key, value) => {
        const newPro = { ...profile }

        newPro[key] = value

        setprofile(newPro)
    }

    return (
        <ScrollView style={globalStyles.container}>
            <ImageBackground
                style={styles.logo}
                source={require('../assets/images/background-signup.png')}
            >
                <TextComponent text='Đăng ký' color={appColors.black} size={30} style={{ fontWeight: '700', position: 'absolute', bottom: -20, alignSelf: 'center' }} />
            </ImageBackground>

            <View style={[globalStyles.container, { alignItems: 'center', paddingHorizontal: 31 }]}>
                <TextComponent text='Tạo tài khoản' size={18} color={appColors.black} style={{ marginBottom: 12 }} />
                <InputComponent
                    value={profile.name}
                    onChange={text => handleValue('name', text)}
                    placeHolder='Họ tên'
                    placeHolderColor={appColors.gray}
                    borderColorFocus={appColors.green}
                />
                <InputComponent
                    value={profile.email}
                    onChange={text => handleValue('email', text)}
                    placeHolder='Email'
                    placeHolderColor={appColors.gray}
                    borderColorFocus={appColors.green}
                />
                <InputComponent
                    value={profile.phonenumber}
                    onChange={text => handleValue('phonenumber', text)}
                    placeHolder='Số điện thoại'
                    placeHolderColor={appColors.gray}
                    borderColorFocus={appColors.green}
                />
                <InputComponent
                    value={profile.password}
                    onChange={text => handleValue('password', text)}
                    placeHolder='Mật khẩu'
                    isPassword
                    placeHolderColor={appColors.gray}
                    borderColorFocus={appColors.green}
                />

                <TextComponent text='Để đăng ký tài khoản, bạn đồng ý ' style={{ marginBottom: 20, textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <TextComponent text='Terms & Conditions' type='link' color={appColors.green} style={{ textDecorationLine: 'underline' }} />
                    {' and '}
                    <TextComponent text='Privacy Policy' type='link' color={appColors.green} style={{ textDecorationLine: 'underline' }} />
                </TextComponent>

                <LinearGradient
                    colors={['#007537', '#4CAF50']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ width: '100%', height: 50, borderRadius: 15, marginBottom: 21 }}
                >
                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => console.log('Click')}>
                        <TextComponent
                            text='Đăng Ký'
                            size={20}
                            style={{ fontWeight: '700' }}
                            color={appColors.white}
                        />
                    </TouchableOpacity>
                </LinearGradient>

                <RowComponent style={{ paddingHorizontal: 6, marginBottom: 35 }}>
                    <LinearGradient
                        colors={['#007537', '#4CAF50']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ flex: 1, height: 1 }}
                    />
                    <TextComponent text='Hoặc' color={appColors.black} style={{ marginHorizontal: 9 }} />
                    <LinearGradient
                        colors={['#007537', '#4CAF50']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ height: 1, flex: 1 }}
                    />
                </RowComponent>

                <RowComponent
                    style={{ alignSelf: 'center', marginBottom: 30 }}
                >
                    <Google width={32} height={32} />
                    <SpaceComponent width={30} />
                    <Facebook width={32} height={32} />
                </RowComponent>

                <RowComponent style={{marginBottom: 10}}>
                    <TextComponent text='Tôi đã có tài khoản' />
                    <SpaceComponent width={7} />
                    <TextComponent text='Đăng nhập' color={appColors.green} type='link' onPress={() => navigation.navigate('LoginScreen')} />
                </RowComponent>
            </View>
        </ScrollView>


    )
}

export default SignupScreen

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: height * 0.3,
        resizeMode: 'stretch',
        marginBottom: 38
    }
})