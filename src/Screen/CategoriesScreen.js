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
      <TextComponent text={item.name} size={14} color={appColors.gray} />
    </TouchableOpacity>
  )

  return (
    <View style={globalStyles.container}>
      <ToolBarComponent
        iconLeft={<ArrowLeft2 color={appColors.black} size={24} />}
        iconRight={<ShoppingCart color={appColors.black} size={24} />}
        title='CÂY TRỒNG' />
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={item => item.id}
        style={{ marginBottom: 18 }}
      />
      <ScrollView>
        <GridviewComponent
          style={{ flex: 1 }}
          data={plants}
          renderItems={item => <ProductComponent {...item} />}
          col={2}
          limitItem={10}
        />
      </ScrollView>

    </View>
  );
};

export default CategoriesScreen;
