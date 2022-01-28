import { StyleSheet, View, Text } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { enableScreens } from "react-native-screens";
import { LogBox } from "react-native";

import MealsNavigator from "./navigation/MealsNavigator";
import mealsReducer from "./store/reducers/meals";

import { createStore, combineReducers } from "redux"; //
import { Provider } from "react-redux"; //

enableScreens();

const rootReducer = combineReducers({
  //
  meals: mealsReducer,
});

const store = createStore(rootReducer); //

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

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
