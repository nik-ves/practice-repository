export const TOGGLE_FAVOTITE = "TOGGLE_FAVORITE";

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAVOTITE,
    mealId: id,
  };
};
