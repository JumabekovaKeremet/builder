import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
} from "../actions/types";

const initialState = {
  ingredients: {},
  price: 0,
};
const prices = {
  bananas: 15,
  chocolate: 20,
  lactic: 10,
  pistachio: 25,
  strawberry: 18,
};

const builder = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_INGREDIENT:
      newState.ingredients[action.ingredient]++;
      newState.price += prices[action.ingredient];
      break;
    case REMOVE_INGREDIENT:
      newState.ingredients[action.ingredient]--;
      newState.price -= prices[action.ingredient];
      break;
    case SET_INGREDIENTS:
      newState.ingredients = action.data.ingredients;
      newState.price = action.data.price;
      break;

    default:
      break;
  }

  return newState;
};

export default builder;
