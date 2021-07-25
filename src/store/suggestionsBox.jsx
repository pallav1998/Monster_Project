import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {showlocations: false};

const showSlice = createSlice({
    name:"show",
    initialState,
    reducers: {
        showLocation(state) {
            state.showlocations = true;
        },
    }
});

const store = configureStore({
    reducer: showSlice.reducer,
})

export const showActions = showSlice.actions;

export default store;