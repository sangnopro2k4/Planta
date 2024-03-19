import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry"

const categories = [
    {
        id: 1,
        name: 'Cây trồng',
        parent_id: null
    },
    {
        id: 2,
        name: 'Chậu cây trồng',
        parent_id: null
    },
    {
        id: 3,
        name: 'Phân bón',
        parent_id: null
    },
    {
        id: 4,
        name: 'Ưa bóng',
        parent_id: 1
    },
    {
        id: 5,
        name: 'Ưa sáng',
        parent_id: 1
    },
    {
        id: 6,
        name: 'Hàng mới về',
        parent_id: 1
    }
]

const products = [
    { "id": 1, "name": "Pele Clermontia", "category_id": 5, "price": 64, "img": "http://dummyimage.com/197x191.png/ff4444/ffffff", "size": "L", "quantity": 51, "origin": "Xinyang" },
    { "id": 2, "name": "Platydictya Moss", "category_id": 1, "price": 64, "img": "http://dummyimage.com/172x182.png/dddddd/000000", "size": "M", "quantity": 22, "origin": "Heshang" },
    { "id": 3, "name": "Stiff Bluestar", "category_id": 1, "price": 78, "img": "http://dummyimage.com/156x151.png/ff4444/ffffff", "size": "3XL", "quantity": 50, "origin": "Baopukang" },
    { "id": 4, "name": "Rough Maidenhair", "category_id": 2, "price": 66, "img": "http://dummyimage.com/186x162.png/5fa2dd/ffffff", "size": "XL", "quantity": 34, "origin": "Skalbmierz" },
    { "id": 5, "name": "Heartleaf Madeiravine", "category_id": 5, "price": 68, "img": "http://dummyimage.com/188x183.png/ff4444/ffffff", "size": "XS", "quantity": 68, "origin": "Dome" },
    { "id": 6, "name": "Mauritia", "category_id": 4, "price": 69, "img": "http://dummyimage.com/188x159.png/5fa2dd/ffffff", "size": "XL", "quantity": 37, "origin": "Estância" },
    { "id": 7, "name": "Spiderleaf", "category_id": 5, "price": 83, "img": "http://dummyimage.com/186x155.png/5fa2dd/ffffff", "size": "S", "quantity": 83, "origin": "Runaway Bay" },
    { "id": 8, "name": "Convoluted Barbula Moss", "category_id": 1, "price": 60, "img": "http://dummyimage.com/175x151.png/ff4444/ffffff", "size": "S", "quantity": 40, "origin": "Jijiga" },
    { "id": 9, "name": "Paleyellow Suncup", "category_id": 2, "price": 50, "img": "http://dummyimage.com/191x171.png/cc0000/ffffff", "size": "2XL", "quantity": 23, "origin": "Kavýli" },
    { "id": 10, "name": "Eurasian Nailwort", "category_id": 3, "price": 61, "img": "http://dummyimage.com/176x165.png/cc0000/ffffff", "size": "M", "quantity": 59, "origin": "Toyohama" },
    { "id": 11, "name": "Puffcalyx Gilia", "category_id": 2, "price": 68, "img": "http://dummyimage.com/150x165.png/cc0000/ffffff", "size": "2XL", "quantity": 52, "origin": "Čížkovice" },
    { "id": 12, "name": "Ridgetop Labordia", "category_id": 3, "price": 55, "img": "http://dummyimage.com/197x167.png/5fa2dd/ffffff", "size": "2XL", "quantity": 52, "origin": "Halmstad" },
    { "id": 13, "name": "Eastern Purple Bladderwort", "category_id": 1, "price": 67, "img": "http://dummyimage.com/153x200.png/cc0000/ffffff", "size": "2XL", "quantity": 33, "origin": "Chŏngju" },
    { "id": 14, "name": "Night Scented Orchid", "category_id": 2, "price": 91, "img": "http://dummyimage.com/187x150.png/dddddd/000000", "size": "M", "quantity": 40, "origin": "Kup" },
    { "id": 15, "name": "Long's Rush", "category_id": 4, "price": 88, "img": "http://dummyimage.com/195x190.png/dddddd/000000", "size": "XL", "quantity": 29, "origin": "Hesperange" },
    { "id": 16, "name": "Dwarf Purple Monkeyflower", "category_id": 6, "price": 89, "img": "http://dummyimage.com/169x194.png/5fa2dd/ffffff", "size": "2XL", "quantity": 94, "origin": "Swindon" },
    { "id": 17, "name": "Western Blue Virginsbower", "category_id": 6, "price": 72, "img": "http://dummyimage.com/178x166.png/dddddd/000000", "size": "XL", "quantity": 35, "origin": "N’dalatando" },
    { "id": 18, "name": "Meyer's Morning-glory", "category_id": 3, "price": 59, "img": "http://dummyimage.com/169x178.png/dddddd/000000", "size": "XL", "quantity": 81, "origin": "Lewobelek" },
    { "id": 19, "name": "Woodland Spurge", "category_id": 3, "price": 97, "img": "http://dummyimage.com/171x180.png/cc0000/ffffff", "size": "3XL", "quantity": 45, "origin": "Mijiang" },
    { "id": 20, "name": "Silver Buffaloberry", "category_id": 6, "price": 63, "img": "http://dummyimage.com/175x198.png/5fa2dd/ffffff", "size": "S", "quantity": 55, "origin": "Kasaoka" },
    { "id": 21, "name": "California Ragwort", "category_id": 6, "price": 57, "img": "http://dummyimage.com/192x184.png/5fa2dd/ffffff", "size": "S", "quantity": 87, "origin": "Xiangyang" },
    { "id": 22, "name": "Texas Palafox", "category_id": 4, "price": 79, "img": "http://dummyimage.com/168x155.png/ff4444/ffffff", "size": "L", "quantity": 63, "origin": "Toroy" },
    { "id": 23, "name": "Ridgetop Guavaberry", "category_id": 1, "price": 51, "img": "http://dummyimage.com/151x200.png/ff4444/ffffff", "size": "XS", "quantity": 45, "origin": "Shuidong" },
    { "id": 24, "name": "Stenocybe Lichen", "category_id": 5, "price": 75, "img": "http://dummyimage.com/191x188.png/ff4444/ffffff", "size": "L", "quantity": 80, "origin": "Utan" },
    { "id": 25, "name": "Birdcage Evening Primrose", "category_id": 4, "price": 77, "img": "http://dummyimage.com/181x151.png/ff4444/ffffff", "size": "S", "quantity": 75, "origin": "Xiangrong" },
    { "id": 26, "name": "Pineland Daisy", "category_id": 3, "price": 84, "img": "http://dummyimage.com/189x173.png/5fa2dd/ffffff", "size": "L", "quantity": 87, "origin": "Sidi Slimane" },
    { "id": 27, "name": "Fishtail Palm", "category_id": 4, "price": 69, "img": "http://dummyimage.com/177x176.png/5fa2dd/ffffff", "size": "S", "quantity": 59, "origin": "Gabaldon" },
    { "id": 28, "name": "Texas Snoutbean", "category_id": 2, "price": 70, "img": "http://dummyimage.com/152x163.png/dddddd/000000", "size": "L", "quantity": 64, "origin": "Zhenxi" },
    { "id": 29, "name": "Rosy Gilia", "category_id": 4, "price": 52, "img": "http://dummyimage.com/156x199.png/5fa2dd/ffffff", "size": "XL", "quantity": 89, "origin": "Petukhovo" },
    { "id": 30, "name": "Emory's Milkvetch", "category_id": 2, "price": 78, "img": "http://dummyimage.com/167x163.png/dddddd/000000", "size": "3XL", "quantity": 85, "origin": "Vysotskoye" }
]

const getAllCategories = (collection, _id) => {
    return collection.reduce((total, curr) => {
        if (_id === curr.parent_id) {
            return total.concat(curr.id, getAllCategories(collection, curr.id))
        }
        return total
    }, []).concat(_id)
}

const getProducts = (id, categories) => {
    if (!id)
        return products.filter(item => categories.includes(item.category_id))
    else
        return products.filter(item => item.category_id === id)
}

const getProductList = (id) => {
    return products.filter(item => item.category_id === id)
}

const getNameCate = (_id) => {
    const category = categories.find(item => item.id === _id)
    return category ? category.name : null
}

const getDetailProduct = (product_id) => {
    return products.find(item => item.id === product_id)
} 

const getCate = (ids) => {
    return categories.filter(item => ids.includes(item.id)).map(item => ({
        id: item.id,
        name: item.name
    }))
}   

export {
    products,
    categories,
    getAllCategories,
    getProducts,
    getNameCate,
    getDetailProduct,
    getProductList,
    getCate
}
