import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tasks from "../data/tasks";

export const fetchTasks = createAsyncThunk(
    'tasks/fetch',
    async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        return tasks;
    }
);

const initialState = {
    tasks: [
        { id: 0, title: "Задание 0", completed: false }
    ]
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        load: (state, action) => {
            console.log('Loading...')
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loadingStatus = 'loading';
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loadingStatus = 'idle';
                state.error = null;
                state.tasks = [...state.tasks, ...action.payload]
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loadingStatus = 'failed';
                state.error = action.error;
                console.log('failed');
            });
    },
});

export const { load } = taskSlice.actions;
export default taskSlice.reducer; 