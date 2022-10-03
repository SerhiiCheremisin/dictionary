import { IDictionaryItem } from '../types/commonTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { addCorrect, addIncorrect, setPace } from '../redux/reducers/quizReducer';

interface QuestonItemProps {
  word : IDictionaryItem,
  current : IDictionaryItem
}

const QuestonItem = ( {word, current} : QuestonItemProps ):JSX.Element => {
    
    const pace = useSelector( (state:RootState) => state.quizReducer.pace);
    const correctAnswers = useSelector( (state:RootState) => state.quizReducer.correctAnswer);
    const incorrectAnswers = useSelector( (state:RootState) => state.quizReducer.incorrectAnswer);

    const dispatch:AppDispatch = useDispatch();

    const answerHandler = ():void => {
        if (current.ua.toLowerCase() === word.ua.toLowerCase()){
            dispatch(addCorrect(correctAnswers+1));
            dispatch(setPace(pace+1));
             return
        } 
          dispatch(addIncorrect(incorrectAnswers+1));
          dispatch(setPace(pace+1));
          return
    }

    return(
        <div onClick={answerHandler} className='question-box__item'>
            {word.ua}
        </div>
    )
}

export default QuestonItem;
