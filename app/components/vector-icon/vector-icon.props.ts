import { TextStyle } from "react-native";

export interface VectorIconProps {
    /**
     * An optional style override useful for padding & margin.
     */
    style?: TextStyle
  
    type: "AntDesign" | "Entypo" | "EvilIcons" | "Feather" | "FontAwesome" | "FontAwesome5" | "Fontisto" | "Foundation" | "Ionicons" | "MaterialCommunityIcons"
  
    name: string
  
    color?: string
  }
  