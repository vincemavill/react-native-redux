import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getPosts = createAsyncThunk(
  'get/getData',
  async () => {

    



    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const data = response.json();
    // const data = response.status;
    return data;
  }
)

export const getSlice = createSlice({
  name: 'get',
  initialState: {
    status: 100,
    result:[]
  },
//   extraReducers: {
//     [getPosts.fulfilled]: (state, { payload }) => {
//       state.result = payload
//       state.status = 'success'
//     },
//   }

  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getPosts.fulfilled]: (state, action) => {
        state.result = action.payload
        state.status = 'success'
    },
    [getPosts.rejected]: (state, action) => {
      state.status = 'failed'
      state.result = action.error.message
    }
  }
})

export default getSlice.reducer