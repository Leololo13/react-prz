import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './userSlice';

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2, scrname: 'wow' },
    { id: 2, name: 'Grey Yordan', count: 1, scrname: 'ward' },
  ],
  reducers: {
    cntPlus(state, id) {
      let a = state.find((x) => x.id == id.payload);
      console.log(a.count);
      a.count++;
    },
    cntMinus(state, action) {
      let a = state.find((x) => x.id == action.payload);
      a.count > 0 ? a.count-- : (a.count = 0);
    },
    addCart(state, action) {
      let a = action.payload;

      for (let i = 0; i < state.length; i++) {
        if (a.id == state[i].id) {
          state[i].count++;
          console.log('잇다', a.id, state[i].id);
          break;
        } else if (i == state.length - 1 && a.id != state[i].id) {
          state.push({ id: a.id, name: a.title, count: 1, scrname: a.content });
          break;
        }
      }
    },
  },
});

export let { cntPlus, cntMinus, addCart } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
