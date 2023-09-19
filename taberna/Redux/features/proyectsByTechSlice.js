import { createSlice } from "@reduxjs/toolkit";

export const proyectsByTechSlice = createSlice({
    name:'proyectsByTech',
    initialState: {
      value:[],
    },
    reducers:{
      cleanProyectsByTech:(state,action)=>{
          state.value=[]
      },
      filterTechByAZ: (state,action)=>{
        state.value = action.payload
      }
    }
})


export const {cleanProyectsByTech,getProyectsByTech,filterTechByAZ} = proyectsByTechSlice.actions

export default proyectsByTechSlice.reducer