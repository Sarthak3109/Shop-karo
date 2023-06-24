import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import { createUser, checkUser} from './authAPI';
// import { RejectedWithValueActionFromAsyncThunk } from '@reduxjs/toolkit/dist/matchers';
const initialState = {
  loggedInUser : null,
  status : "loading",
  error : null
};


export const createUserAsync = createAsyncThunk(
  'auth/createUser',
  async (user) => {
    const response = await createUser(user);
    return response.data;
  }
);

export const checkUserAsync = createAsyncThunk(
  'auth/checkUser',
  async (user) => {
    
    const response = await checkUser(user);
   
    return response.data;
    
   
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload.data;
      
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
       
        state.status = 'idle';
        state.loggedInUser = action.payload.data[0]
      
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle'; 
        state.error = action.error    
        // state.loggedInUser = null
      })
  },
});


export const selectUser = (state) => {return state.auth.loggedInUser};
export const selectError = (state)=> state.auth.error
export default authSlice.reducer;
