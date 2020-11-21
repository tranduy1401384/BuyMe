import * as React from "react"
import { TextStyle, View, ViewStyle, StyleSheet } from "react-native"
import { color, typography } from "../../theme"
import { Text } from "../"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { VectorIconProps } from "./vector-icon.props"

/**
 * Describe your component here
 */

const TXT_DEFAULT: TextStyle = {
  fontSize: 24
}

export function VectorIcon(props: VectorIconProps) {
  const { style, type, name, color } = props
  const iconStyle = { ...TXT_DEFAULT, ...style }

  switch (type) {
    case "AntDesign":
      return <AntDesign name={name} style={iconStyle} color={color} />
    case "Entypo":
      return <Entypo name={name} style={iconStyle} color={color} />
    case "EvilIcons":
      return <EvilIcons name={name} style={iconStyle} color={color} />
    case "Feather":
      return <Feather name={name} style={iconStyle} color={color} />
    case "FontAwesome":
      return <FontAwesome name={name} style={iconStyle} color={color} />
    case "FontAwesome5":
      return <FontAwesome5 name={name} style={iconStyle} color={color} />
    case "Fontisto":
      return <Fontisto name={name} style={iconStyle} color={color} />
    case "Foundation":
      return <Foundation name={name} style={iconStyle} color={color} />
    case "Ionicons":
      return <Ionicons name={name} style={iconStyle} color={color} />
    case "MaterialCommunityIcons":
      return <MaterialCommunityIcons name={name} style={iconStyle} color={color} />

  }
}
