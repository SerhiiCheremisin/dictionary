import { createSlice } from '@reduxjs/toolkit';

const dictionary = {
    words : [],
    needToUpdate: false,
}

const dictionaryReducer = createSlice({
    name: 'dictionaryReducer',
    initialState : dictionary,
    reducers: {
         setDictionary (state, action) {
               state.words = action.payload
         },
         updateDictionary (state, action) {
            state.needToUpdate = action.payload
         }
    }
})

export const { setDictionary, updateDictionary } = dictionaryReducer.actions;

export default dictionaryReducer.reducer;