import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    
    
}
export const postDataSlice = createSlice({
    name: 'addLikesCommShare',
    initialState,
     reducers: {
      addLike (state=initialState, actions) {
        
      },
      clearPost (state=initialState) {
      
      },
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { saveUser, clearPost} = postDataSlice.actions
  
  export default postDataSlice.reducer