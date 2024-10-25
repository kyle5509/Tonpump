import { TComment, TPost } from "@/components/Tokens/type";
import { createSlice } from "@reduxjs/toolkit";

 

type TInitialState = {
    posts: TPost[]
}

const initialState: TInitialState = {
    posts: []
} 

export const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers:({
        loadPosts: (state, action) => {
            state.posts = action.payload
        }
    })
})

export const { loadPosts} = PostSlice.actions