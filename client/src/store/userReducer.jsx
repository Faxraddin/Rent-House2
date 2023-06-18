import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name:'user',
    initialState:{
        user:'',
        token:'',
        isAuth:false,
    },
    reducers:{
        addToken:(state,action) => {
            state.token = localStorage.getItem('token')
        },
        addUser:(state,action) => {
            state.user = localStorage.getItem('user')
        },
        isAuth:(state,action) => {
            state.isAuth = true
        },
        noAuth:(state,action) => {
            state.isAuth = false
        }
    },
})

export default userReducer.reducer
export const {addToken,addUser,isAuth,noAuth} = userReducer.actions