import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HorizontalSection = props => {
  const {title, data} = props;
  return (
    <View>
      <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
        {title}
      </Text>
      <ScrollView horizontal={true} style={{width: 'auto', height: 'auto'}}>
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              width: 300,
              height: 'auto',
              borderWidth: 1,
              borderColor: 'black',
              margin: 10,
            }}>
            <Text>Địa chỉ</Text>
            <Text>{item.address}</Text>
            <Text>Thời gian</Text>
            <Text>{item.time}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default HorizontalSection;
