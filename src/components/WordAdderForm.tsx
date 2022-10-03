import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import '.././appStyles.css';
import { IDictionaryItem } from '../types/commonTypes';
import { dataSender } from '../services/api';
import { v4 as uuidv4 } from 'uuid';
import { updateDictionary } from '../redux/reducers/dicrionaryReducer';
import { useDispatch } from 'react-redux';

const WordAdderForm = () => {

    const [englishWord, setEnglishWord] = useState<string>('');
    const [ukranianWord, setUkranianWord] = useState<string>('');

    const words = useSelector( (state:RootState) => state.dictionaryReducer.words);
    const dispatch : AppDispatch = useDispatch();
    const formHandler = (e:React.FormEvent<HTMLFormElement>):void => {
         e.preventDefault();
    if (ukranianWord === '' || englishWord === '') {
        alert('All field should be filled');
        return
    }
   if (words.some((element:IDictionaryItem) => element.eng.toLowerCase() === englishWord.toLowerCase())
    || words.some((element:IDictionaryItem) => element.ua.toLowerCase() === ukranianWord.toLowerCase())) {
      alert('This word is already exist in your dictionary');
      return
   }
   
   const newWord:IDictionaryItem = {
     id : uuidv4(),
     eng: englishWord,
     ua: ukranianWord
   }
   dataSender(newWord, 'words');
   setEnglishWord('');
   setUkranianWord('');
   dispatch(updateDictionary(true));
   alert('You have succesfully added a new word');
    }

    return(
        <form onSubmit={e => formHandler(e)} action="#" className='word-adder-form'>
         <label htmlFor="engWord">English word</label>
         <input placeholder='Type english word' value={englishWord} onChange={e => setEnglishWord(e.target.value)} id='engWord' name='engWord' type="text" />
         <label htmlFor="uaWord">Translation to Ukrainian</label>
         <input placeholder='Type translation' value={ukranianWord} onChange={e => setUkranianWord(e.target.value) } id='uaWord' name='uaWord' type="text" />
         <button className='appButton'>Add</button>
        </form>
    )
}

export default WordAdderForm;