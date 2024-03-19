import React, { useContext, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/AntDesign'
import { InputComponent, RowComponent, SpaceComponent, TextComponent } from '../Component'
import Facebook from '../assets/svgs/facebook'
import Google from '../assets/svgs/google'
import { appColors, globalStyles, height } from '../contants'
import { MyContext } from '../Component/MyProvider'


const LoginScreen = ({ navigation }) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [inValid, setinValid] = useState(false)
    const { setIsLogin } = useContext(MyContext)

    const handleLogin = async () => {
        if (email === '' || password === '') {
            setinValid(true)
            return
        } else {
            setIsLogin(true)
            setinValid(false)
        }
    }

    return (
        <ScrollView style={[globalStyles.container]}>
            <Image style={styles.logo} source={require('../assets/images/background-login.png')} />
            <View style={[globalStyles.container, { alignItems: 'center', paddingHorizontal: 30 }]}>

                <TextComponent
                    text='Chào mừng bạn'
                    color={appColors.black}
                    size={30}
                    style={{ fontWeight: '700' }}
                />
                <TextComponent
                    text='Đăng nhập tài khoản'
                    color={appColors.black}
                    size={18}
                    style={{ fontWeight: '400', marginBottom: 20 }}
                />
                <View style={{ marginBottom: 16 }}>
                    <InputComponent
                        value={email}
                        onChange={text => setemail(text)}
                        placeHolder='Email'
                        placeHolderColor={appColors.gray}
                        borderColorFocus={appColors.green}
                    />

                    <InputComponent
                        value={password}
                        onChange={text => setpassword(text)}
                        placeHolder='Mật khẩu'
                        placeHolderColor={appColors.gray}
                        borderColorFocus={appColors.green}
                        isPassword
                    />
                    {inValid && <TextComponent text='Invalid email or Password. Try Again !'
                        color={appColors.red} style={{ fontWeight: '600' }} />}
                </View>

                <RowComponent
                    style={{ marginBottom: 24 }}
                    width='100%'
                    justify='space-between' >
                    <RowComponent >
                        <Icon name='checkcircleo' size={22} color={appColors.green} />
                        <TextComponent text='Nhớ tài khoản' style={{ marginStart: 5 }} size={12} />
                    </RowComponent>
                    <TextComponent text='Quên mật khẩu?' type='link' color={appColors.green} size={12} style={{ fontWeight: '500' }} />
                </RowComponent>

                <LinearGradient
                    colors={['#007537', '#4CAF50']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ width: '100%', height: 50, borderRadius: 15, marginBottom: 21 }}
                >
                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => handleLogin()}>
                        <TextComponent
                            text='Đăng Nhập'
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

                <RowComponent style={{ marginBottom: 10 }}>
                    <TextComponent text='Bạn không có tài khoản' />
                    <SpaceComponent width={7} />
                    <TextComponent text='Tạo tài khoản' color={appColors.green} type='link' onPress={() => navigation.navigate('SignupScreen')} />
                </RowComponent>
            </View>
        </ScrollView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    input: {
        flex: 1
    },
    logo: {
        width: '100%',
        height: height * 0.4,
        resizeMode: 'stretch',
    }
})