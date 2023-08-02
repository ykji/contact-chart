import { createStore, combineReducers } from "redux";
import contactReducer from "./reducers/contactReducer";

const rootReducer = combineReducers({
  contacts: contactReducer,
});

const store = createStore(rootReducer);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
