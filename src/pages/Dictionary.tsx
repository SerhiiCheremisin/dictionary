import '.././appStyles.css';
import { IDictionaryItem } from '../types/commonTypes';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import DictionaryListItem from '../components/DictionaryListItem';
import ContentBlock from '../components/ContentBlock';

function Dictionary() {
  
  const words = useSelector( (state:RootState) => state.dictionaryReducer.words);

  return (
    <ContentBlock>
      <h2>Your dictionary</h2>
      <div className="dictionary-button-wrapper">
        <button className='appButton'> <Link to={'/add-the-word'}>Add a new word</Link></button>
        <button className='appButton'> <Link to={'/quiz'}>Repeat words</Link></button>
      </div>
      <ul>
       {words.map( (word:IDictionaryItem) => {
        return <DictionaryListItem key={word.id} id={word.id} eng={word.eng} ua={word.ua} /> 
       })}
      </ul>
    </ContentBlock>);
}

export default Dictionary;