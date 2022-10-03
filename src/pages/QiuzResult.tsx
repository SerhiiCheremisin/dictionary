import ContentBlock from "../components/ContentBlock";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { dataSender } from '../services/api';
import { IArchiveItem } from '../types/commonTypes';
import { addCorrect, addIncorrect, setPace } from '../redux/reducers/quizReducer';
import { v4 as uuidv4 } from 'uuid';

const QuizResut = ():JSX.Element => {

    const pace = useSelector( (state:RootState) => state.quizReducer.pace);
    const correctAnswers = useSelector( (state:RootState) => state.quizReducer.correctAnswer);
    const incorrectAnswers = useSelector( (state:RootState) => state.quizReducer.incorrectAnswer);

    const dispatch:AppDispatch = useDispatch();

    const setToArchive = ():void => {
       const archiveData: IArchiveItem = {
        date : new Date(),
        score : `${correctAnswers}0`,
        id: uuidv4()
       }
       dataSender(archiveData, 'quiz-archive');
       dispatch(addCorrect(0));
       dispatch(addIncorrect(0));
       dispatch(setPace(0));
    }

    if (pace !== 10) {
       return (<ContentBlock><h2>You have not done game recently</h2></ContentBlock> )
    }
    return(
        <ContentBlock>
            <h2>Last quiz result</h2>
           <div className="quiz-resut-wrapper">
           <ul>
                <li>{`You have ${correctAnswers} correct answers`}</li>
                <li>{`You have ${incorrectAnswers} incorrect answers`}</li>
                <li>{`You have ${correctAnswers}0% correct answers`}</li>
            </ul>
            <button className="appButton" onClick={setToArchive}>Got it</button>
           </div>
        </ContentBlock>
    )
}

export default QuizResut;