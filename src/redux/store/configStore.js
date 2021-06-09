import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

const configStore = () => {
  return createStore(rootReducer);
};

export default configStore;