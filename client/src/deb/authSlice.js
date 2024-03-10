import {createSlice} from '@reduxjs/toolkit';

// initial state
const initialState = {
    status: false,
    userData: null,
}

// reducer
const reducerObj = {
    login: (state, action) => {
        state.status = true;
        state.userData = action.payload.userData;
    },
    logout: (state, action) => {
        state.status = false;
        state.userData = null;
    },
}

// slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: reducerObj,
})

// export authSlice
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;