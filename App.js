import { StyleSheet, View, Text } from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { enableScreens } from "react-native-screens";
import { LogBox } from "react-native";

enableScreens();

import MealsNavigator from "./navigation/MealsNavigator";

const fetchFonts = () => {
  useEffect(() => {
    LogBox.ignoreLogs([
      "interpolate() was renamed to interpolateNode() in Reanimated 2. Please use interpolateNode() instead",
    ]);
  }, []);
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={(err) => console.log(err)}
    />;
  }

  return <MealsNavigator />;
}
