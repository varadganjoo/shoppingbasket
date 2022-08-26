export const initialState = {
  basket: [],
};

//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => parseFloat(item.cost) + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.index === action.index
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      }

      if (newBasket.length > 0) {
        for (var a = 0; a < newBasket.length; a++) {
          newBasket[a].index = a + 1;
        }
      }

      return {
        ...state,
        basket: newBasket,
      };
    case "REMOVE_ALL":
      return {
        ...state,
        basket: [],
      };
    case "EDIT_PRICE":
      const i = state.basket.findIndex(
        (basketItem) => basketItem.index === action.index
      );
      let editBasket = [...state.basket];
      if (i >= 0) {
        //edit the cost
        editBasket[i].cost = editBasket[i].cost + action.add;
      }
      return {
        ...state,
        basket: editBasket,
      };
    case "UPDATE_BASKET":
      const planCheck = state.basket.findIndex(
        (basketItem) => basketItem.index === action.index
      );
      let editNewBasket = [...state.basket];
      if (planCheck >= 0) {
        //edit the cost
        editNewBasket[planCheck].id = action.id;
        editNewBasket[planCheck].title = action.title;
        editNewBasket[planCheck].cost = action.cost;
        if (
          editNewBasket[planCheck].id >= 1400 &&
          editNewBasket[planCheck].id <= 7100
        ) {
          editNewBasket[planCheck].outright = action.outright;
        }
        editNewBasket[planCheck].initial = action.initial;
      }
      return {
        ...state,
        basket: editNewBasket,
      };

    default:
      return state;
  }
};

export default reducer;
