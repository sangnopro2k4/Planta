import { ArrowLeft2, ShoppingCart } from 'iconsax-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { ProductComponent, TextComponent, ToolBarComponent } from '../Component';
import { appColors, globalStyles } from '../contants';
import { categories, getAllCategories, getCate, getProductList, getProducts } from '../mock-data/data';


const CategoriesScreen = (props) => {
  const id = props.route.params.id
  console.log(id)
  const [list, setList] = useState([])
  const [listProduct, setListProduct] = useState([])
  const refProductList = useRef(null)
  const [selected, setselected] = useState(id)

  useEffect(() => {
    const cate = getCate(getAllCategories(categories, id))
    cate[0].name = 'Tất cả'
    setList(cate)
  }, [id])

  useEffect(() => {
    let listP = []
    if (selected === id) {
      listP = getProducts(0, getAllCategories(categories, id))
    } else {
      listP = getProductList(selected)
    }
    setListProduct(listP)
    refProductList?.current?.scrollToOffset({
      animated: true,
      offset: 0
    })
  }, [selected])



  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => setselected(item.id)}
      style={{
        marginEnd: 8,
        backgroundColor: selected === item.id ? appColors.green : 'transparent',
        height: 40,
        borderRadius: 4,
        paddingHorizontal: 8,
        justifyContent: 'center'
      }}>
      <TextComponent text={item.name} size={14} color={selected === item.id ? appColors.white : appColors.blackLine} />
    </TouchableOpacity>
  )

  const renderProduct = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => props.navigation.navigate('DetailScreen', {id: item.id})} style={{ flex: 0.5 }}>
        <ProductComponent {...item} />
      </TouchableOpacity>
    )
  }

  return (
    <View style={globalStyles.container}>
      <ToolBarComponent
        iconLeft={<ArrowLeft2 color={appColors.black} size={24} onPress={() => props.navigation.goBack()} />}
        iconRight={<ShoppingCart color={appColors.black} size={24} onPress={() => props.navigation.navigate('CartScreen')} />}
        title='CÂY TRỒNG' />
      <View style={{ flex: 1, paddingHorizontal: 14 }}>
        <FlatList
          data={list}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={item => item.id}
          style={{ flexGrow: 0, marginBottom: 15 }}
        />
        <FlatList
          ref={refProductList}
          data={listProduct}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>



    </View>
  );
};

export default CategoriesScreen;
