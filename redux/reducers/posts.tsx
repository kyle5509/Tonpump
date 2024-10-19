import { TComment, TPost } from "@/components/Tokens/type";
import { createSlice } from "@reduxjs/toolkit";


interface IPost {
    post: TPost[]
    comment: TComment[]
}


type TInitialState = IPost[] | []

const initialState:  TInitialState = [] 

export const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers:({
        addPosts: (state, action) => {
            state = action.payload
            return state
        }
    })
})

export const { addPosts} = PostSlice.actions