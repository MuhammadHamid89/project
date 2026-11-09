// action make and use immer not use spread operator
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:0,
}

const counterSlice=createSlice({   //hum yha object ki surat my value d rhy hain
    name:'counter',
    initialState,
    reducers:{
        increment(state){
            state.count++;
        },
        decrement(state){
            state.count--;
        },
        reset(state){
            state.count=0;
        },
        addFive(state){
            state.count+=5
        },
        addAmount(state,action){
            state.count+=action.payload
        }
    },
})
export const {increment,decrement,reset,addFive,addAmount}=counterSlice.actions  // action create who user perform
export default counterSlice.reducer