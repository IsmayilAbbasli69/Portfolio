import { configureStore, createSlice } from '@reduxjs/toolkit';

const IDSlice = createSlice({
  name: 'id',
  initialState: {
 total_id:[],
 id:''
  },
  reducers: {
    setID: (state, action) => {
      state.id = action.payload;
    },
    setTotalID:(state,action)=>{
        state.total_id=action.payload
    }
    
  }
});

const Store = configureStore({
    reducer: {
      id: IDSlice.reducer,
      
    }
  });
  export const {setID,setTotalID}=IDSlice.actions;
  
  export default Store;