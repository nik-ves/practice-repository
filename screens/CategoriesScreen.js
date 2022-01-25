import { Text, View, StyleSheet, Button } from "react-native";

const CategoriesScreen = (props) => {
  console.log(props);

  return (
    <View style={styles.screen}>
      <Text>The categories screen!</Text>
      <Button
        title="Go to meals!"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
