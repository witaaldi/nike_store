import ActionType from "../actions/actionType";
import { combineReducers } from "redux";

const initialState = {
  numberCart: 0,
  Carts: [],
  _products: [],
};

// REDUCER
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_DATA:
      return {
        ...state,
        shoesData: action.payload,
      };
    case ActionType.GET_NUMBER_CART:
      return {
        ...state,
      };
    case ActionType.ADD_CART:
      if (state.numberCart === 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.name,
          // image: action.payload.image,
          price: action.payload.price,
          color: action.payload.color,
          size: action.payload.size,
        };
        state.Carts.push(cart);
      } else {
        let check = false;
        state.Carts.map((item, key) => {
          if (item.id === action.payload.id) {
            state.Carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.name,
            // image: action.payload.image,
            price: action.payload.price,
            color: action.payload.color,
            size: action.payload.size,
          };
          state.Carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case ActionType.DELETE_CART:
      let quantity_ = state.Carts[action.payload].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        Carts: state.Carts.filter((item) => {
          return item.id !== state.Carts[action.payload].id;
        }),
      };
    default:
      return state;
  }
  // if (action.type === ActionType.GET_DATA) {
  //   return {
  //     ...state,
  //     shoesData: action.payload,
  //   };
  // }
  // return state;
};

const AllReducer = combineReducers({
  _bundle: rootReducer,
});

export default AllReducer;
