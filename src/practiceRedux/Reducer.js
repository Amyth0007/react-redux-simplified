import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count:0
}
const customSlice = createSlice({
    initialState,
    name: "kahi pn",
    reducers: {
        vadhava : (state, action)=>{
             state.count += 1;
        },
        kmkro : (state, action)=>{
             state.count -= 1;
        }
    }
})

export const {vadhava, kmkro} = createSlice.action
export default customSlice.reducer;