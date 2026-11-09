import { createSlice } from "@reduxjs/toolkit";
const initialState={
    items:[
        {
            id:1,
            title:'get start with react',
            category:'react',
            featured:true,
        },
        {
            id:2,
            title:'get start with redux',
            category:'Redux',
            featured:false,
        },
    ],
};

const blogSlice=createSlice({
    name:'blogs',
    initialState,
    reducers:{
        addBlog:(state,action)=>{
            state.items.push(action.payload)
        },
        deleteBlog:(state,action)=>{
            state.items=state.items.filter((blog)=>blog.id !== action.payload)
        },
        toggleFeatured:(state,action)=>{
            const selectedBlog=state.items.find((blog)=>blog.id ===action.payload);
            if(selectedBlog){
                selectedBlog.featured = !selectedBlog.featured
            }
        }
    }
})
export const {addBlog,deleteBlog,toggleFeatured}=blogSlice.actions
export default blogSlice.reducer