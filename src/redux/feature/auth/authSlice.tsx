import { createSlice } from "@reduxjs/toolkit";
import { TAuthState } from "../../interface";



const initialState: TAuthState = {
    user:null,
    token : null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser: (state, action)=>{

        },
        setToken : (state, action)=>{

        }
    }
})

export const {setUser, setToken} = authSlice.actions

export default authSlice.reducer