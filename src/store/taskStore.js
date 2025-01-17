import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";

const taskStore = configureStore({
    reducer: rootReducer,
});

export default taskStore;