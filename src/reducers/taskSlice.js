import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tasks from "../data/tasks";

export const fetchTasks = createAsyncThunk(
    'tasks/fetch',
    async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        return tasks;
    }
);

const initialState = {
    tasks: []
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
                // В строках 36-41 сложнее, чем следовало бы из-за дублирования загружаемых тасков в state.tasks 
                action.payload.map(newTask => {
                    if (state.tasks.filter(oldTask => oldTask.id == newTask.id).length === 0) {
                        state.tasks = [...state.tasks, newTask];
                    }
                });
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loadingStatus = 'failed';
                state.error = action.error;
            });
    },
});

export const { load } = taskSlice.actions;
export default taskSlice.reducer; 