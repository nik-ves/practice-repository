import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const FiltersScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The filters screen!</Text>
    </View>
  );
};

// FiltersScreen.navigationOptions = (navData) => {
//   return {
//     headerTitle: "Filter Meals",
//     headerStyle: {
//       backgroundColor: Colors.primaryColor,
//     },
//     headerTintColor: "white",
//   };
// };
FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: "white",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          size={25}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FiltersScreen;
