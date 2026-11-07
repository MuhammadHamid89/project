import { createSlice } from "@reduxjs/toolkit";
const initialState={
    value:0,
}

const counterSlice=createSlice({   //hum yha object ki surat my value d rhy hain
    name:'counter',
    initialState,
    reducers:{},
})
export default counterSlice.reducer