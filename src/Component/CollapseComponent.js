import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RowComponent, TextComponent } from '.'
import { appColors } from '../contants'

const CollapseComponent = ({ children, title, icon, titleStyle }) => {
  const [collapse, setCollapse] = useState(false)
  const toggleCollapse = () => {
    setCollapse(!collapse)
  }

  const body = (<View style={{ width: '100%', marginBottom: 15 }}>
    {children}
  </View>)
  return (
    <View style={styles.collapseContainer}>
      <TouchableOpacity onPress={() => toggleCollapse()} style={{ marginBottom: 15 }}>
        <RowComponent justify='space-between'>
          <TextComponent text={title} size={16} color={appColors.black} style={titleStyle} />
          {icon && typeof icon === 'function' ? icon(!collapse) : icon}
        </RowComponent>
      </TouchableOpacity>
      {collapse && body}
    </View>
  )
}

export default CollapseComponent

const styles = StyleSheet.create({
  collapseContainer: {
    width: '100%',
  }
})