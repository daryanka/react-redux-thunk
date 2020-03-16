import { combineReducers } from "redux";
import bitcoinReducer from "./bitcoinReducer";

const rootReducer = combineReducers({
  bitcoin: bitcoinReducer
})

export default rootReducer;