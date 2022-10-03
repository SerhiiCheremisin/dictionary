import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { addCorrect, addIncorrect, setPace } from '../redux/reducers/quizReducer';

import QiuzQuestion from '../components/QiuzQuestion';

const QuizGame = ():JSX.Element => {
    const navigator = useNavigate();
    const dispatch :AppDispatch = useDispatch();

const words = useSelector( (state:RootState) => state.dictionaryReducer.words);
const pace = useSelector( (state:RootState) => state.quizReducer.pace);

if (pace === 10) {
    addCorrect(0);
    addIncorrect(0);
    setPace(0);
    navigator('/quiz-result');
}

if (words.length < 10) {
    return(<h3>Not enough words to start the game</h3>)
}

return <QiuzQuestion/>
}

export default QuizGame;