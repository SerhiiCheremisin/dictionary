import { createSlice } from '@reduxjs/toolkit';

const quiz = {
    correctAnswer: 0,
    incorrectAnswer : 0,
    pace: 0,
    shuffledMainArray: [],
}

const quizReducer = createSlice({
    name: 'quizReducer',
    initialState : quiz,
    reducers: {
        addCorrect (state, action) {
            state.correctAnswer = action.payload
        },
        addIncorrect (state, action) {
            state.incorrectAnswer = action.payload
        },
        setPace (state, action) {
            state.pace = action.payload
        },
        setShuffledArray (state, action) {
            state.shuffledMainArray = action.payload
        }
    }
})

export const { addCorrect, addIncorrect, setPace, setShuffledArray } = quizReducer.actions;

export default quizReducer.reducer;