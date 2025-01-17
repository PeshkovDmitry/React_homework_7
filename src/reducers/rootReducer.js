import { combineReducers } from "redux";
import taskReducer from "./taskSlice";

const rootReducer = combineReducers({
    tasks: taskReducer,
});

export default rootReducer;