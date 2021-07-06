import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './../basicSlice'

import postsReducer from './../getSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsReducer,
  }
})