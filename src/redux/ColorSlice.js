import { createSlice } from "@reduxjs/toolkit";


const colorSlice = createSlice({
    name: 'colorSlice',
    initialState: {
        color: 'green',
    },
    reducers: {
        changeColor: (state, action) => {
            state.color = 'yellow'
        }
    }
}) 

export const { changeColor } = colorSlice.actions

export default colorSlice.reducer