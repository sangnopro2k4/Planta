import { ArrowLeft2, ShoppingCart } from 'iconsax-react-native';
import React, { useState } from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import { GridviewComponent, ProductComponent, TextComponent, ToolBarComponent } from '../Component';
import { appColors, globalStyles } from '../contants';
import { plants } from '../mock-data/plants';

const data = [
  {
    id: 1,
    name: 'Tất cả',
  },
  {
    id: 2,
    name: 'Hàng mới về'
  },
  {
    id: 3,
    name: 'Ưa bóng'
  },
  {
    id: 4,
    name: 'Ưa sáng'
  }
]

const CategoriesScreen = (props) => {

  const [selected, setselected] = useState(1)

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
      <TouchableOpacity onPress={() => props.navigation.navigate('DetailScreen')} style={{ flex: 0.5 }}>
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
          data={data}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={item => item.id}
          style={{ flexGrow: 0, marginBottom: 15 }}
        />
        <FlatList
          data={plants}
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
