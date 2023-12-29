import { createSlice } from "@reduxjs/toolkit";
import data from './product.json'

const slice=createSlice({
    name:"magicbrick",
    initialState:{
        aob:data.chennai,
        property:data.Properties,
        flat:data.flatbhk,
        villa:data.flat,
        min:data.min,
        max:data.max,
        minvalue:"",
        maxvalue:""
    },
    reducers:{
        handleaob:(state,action)=>{
         state.aob=action.payload
        },
        handleflatcolor:(state,action)=>{
            state.villa=action.payload
        },
        handlebhkcolor:(state,action)=>{
            state.flat=action.payload
        },
        handlemin:(state,action)=>{
            state.min=action.payload
        },
        handlemax:(state,action)=>{
            state.max=action.payload
        },
        handlemaxvalue:(state,action)=>{
            state.maxvalue=action.payload
        },
        handleminvalue:(state,action)=>{
            state.minvalue=action.payload
        }
    }
}    
)

export default slice.reducer
export const {handleaob,handleflatcolor,handlebhkcolor,handlemin,handlemax,handleminvalue,handlemaxvalue}=slice.actions