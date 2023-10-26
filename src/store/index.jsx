import { createStore, combineReducers, applyMiddleware } from "redux" // yarn add redux && yarn add react-redux
import { cashReducer } from "./cashReduser"
import { customerReducer } from "./customerReducer"
import { composeWithDevTools } from "redux-devtools-extension" // yarn add redux-devtools-extension
import thunk from 'redux-thunk'; // yarn add redux-thunk

const rootReducer = combineReducers({
  //объединяем 2 reducer
  cash: cashReducer,
  customers: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
/*объект содержащий несколько методов: 
1)getState - получить состояние 2)dispatch - изменить состояние 3)подписаться на изменение состояния
*/
