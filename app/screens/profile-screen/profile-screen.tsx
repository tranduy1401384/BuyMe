import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { Screen, Text, Button } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { useNavigation, NavigationProp } from "@react-navigation/native"
import { PrimaryParamList } from "../../navigation"

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
}
const LAYOUT_CONTAINER: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
}

export const ProfileScreen = observer(function ProfileScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation<NavigationProp<PrimaryParamList>>()

  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="profileScreen" />
      <View style={LAYOUT_CONTAINER}>
        <Button text="Login" onPress={() => {
          navigation.navigate("authenticationStack")
        }} />
      </View>
    </Screen>
  )
})
