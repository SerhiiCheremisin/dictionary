import ContentBlock from "../components/ContentBlock";
import QuizGame from '../components/QuizGame';
 
const Quiz = ():JSX.Element => {
    return(
        <ContentBlock>
         <h2>Let the qiuz begin</h2>
         <QuizGame/>
        </ContentBlock>
    )
}

export default Quiz;