import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { shuffle } from '../services/commonFunctions';
import { IDictionaryItem } from '../types/commonTypes';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';

import QuestonItem from '../components/QuestionItem';

const QiuzQuestion = ():JSX.Element => {

    const [questionList, setQuestionList] = useState<IDictionaryItem[]>([]);

    const shuffeledAray:IDictionaryItem[] = useSelector ( (state:RootState) => state.quizReducer.shuffledMainArray);
    const words = useSelector( (state:RootState) => state.dictionaryReducer.words);
    const pace = useSelector( (state:RootState) => state.quizReducer.pace);

    const dispatch:AppDispatch = useDispatch();

  const setQuestions = ():void => {
    const stateCopy: IDictionaryItem[] = [...words].filter( (word : IDictionaryItem) => word.id !== shuffeledAray[pace].id);
    const temporaryCopy:IDictionaryItem[] = shuffle(stateCopy);
    const temporaryBox = [...temporaryCopy.slice(0,3), ...[shuffeledAray[pace]]];
    const currentQiestionBoxArray = shuffle(temporaryBox);
    setQuestionList(currentQiestionBoxArray);
  }

    useEffect( () => {
        setQuestions();
    }, [pace])

    return(
        <div className="question-box-wrapper">
          <h3>{`Translate "${shuffeledAray[pace].eng}" to ukrainian`}</h3>
          <div className="question-box">
             {questionList.map( (word:IDictionaryItem ) => {
                return <QuestonItem key={word.id} word={word} current={shuffeledAray[pace]} />
             })}
          </div>
        </div>
    )
}

export default QiuzQuestion;