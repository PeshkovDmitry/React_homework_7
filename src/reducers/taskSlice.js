import { createSlice } from "@reduxjs/toolkit";
import tasks from "../data/tasks";

const initialState = {
    tasks: tasks
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        load: (state, action) => {
            console.log('Loading...')
        },
    }
});

export const { load } = taskSlice.actions;
export default taskSlice.reducer; 