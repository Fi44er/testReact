const defaultState = {
  customers: [],
}

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER": // action 1
      return { ...state, customers: [...state.customers, action.payload] }
    case "REMOVE_CUSTOMER": // action 2
      return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
    default:
      return state
  }
}
