import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { Screen, Text, Wallpaper } from "../../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
}
const LAYOUT_CONTAINER: ViewStyle = {
  alignItems:'center',
  justifyContent: 'center',
  flex: 1
}

export const LoginScreen = observer(function LoginScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll" unsafe={true}>
      <Wallpaper />
      <View style={LAYOUT_CONTAINER}>
        <Text preset="header" text="loginScreen" style={{color:color.palette.white}} />
      </View>
    </Screen>
  )
})
