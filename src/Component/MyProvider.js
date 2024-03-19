import React, { createContext, useRef, useState } from "react";

export const MyContext = createContext()

export default MyProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [isLogin, setIsLogin] = useState(false)
    const holderPay = useRef(new Map())
    const cartMap = useRef(new Map())

    return (
        <MyContext.Provider value={{ cart, setCart, isLogin, setIsLogin, holderPay, cartMap }}>
            {children}
        </MyContext.Provider>
    )
}
