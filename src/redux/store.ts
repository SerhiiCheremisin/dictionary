import { configureStore } from '@reduxjs/toolkit';

// slices
import dictionaryReducer from '../redux/reducers/dicrionaryReducer';
import quizReducer from '../redux/reducers/quizReducer';

const store = configureStore({
    reducer: {
      dictionaryReducer,
      quizReducer
    }
})

export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;