import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";
import CustomHeaderButton from "../components/HeaderButton";
import ListItem from "../components/ListItem";
import { useEffect, useCallback } from "react";

const MealDetailScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const dispatch = useDispatch();

  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({
      toggleFav: toggleFavoriteHandler,
    });
  }, [toggleFavoriteHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />

      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>

      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}

      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favorite" iconName="star" onPress={toggleFavorite} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontWeight: "700",
    fontSize: 22,
    textAlign: "center",
  },
});

export default MealDetailScreen;
