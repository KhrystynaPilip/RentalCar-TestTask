export const selectCarInfo = (state) => state.oneCar.data;
export const selectCarIsLoading = (state) => state.oneCar.loading;
export const selectCarError = (state) => state.oneCar.error;
export const selectCars = (state) => state.cars.data;
export const selectTotalPages = (state) => state.cars.totalPages;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectFavorites = (state) => state.favorites.ids;
