import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    wallet: 100,
    cart:0
  },
  reducers: {
    addCart: state => {
      state.cart += 1
    },
    removeCart: state => {
        state.cart -= 1
    },
    addAmount: (state, action) => {
      state.wallet += Number(action.payload)
    },
    deductAmount: (state, action) => {
        state.wallet -= Number(action.payload)
    }
  }
})



// Action creators are generated for each case reducer function
export const { addCart, removeCart, addAmount, deductAmount } = counterSlice.actions

export default counterSlice.reducer