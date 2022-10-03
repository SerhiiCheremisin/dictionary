import ContentBlock from "../components/ContentBlock";
import { useState, useEffect } from 'react'; 
import { getData } from '../services/api';
import { IArchiveItem } from '../types/commonTypes';

const QuizArchive = ():JSX.Element => {

    const [archive, setArchive] = useState<IArchiveItem[]>([])

    useEffect(() => {
        getData('quiz-archive')
        .then( data => setArchive(data) )
    }, [])

    const averageScore = () => {
        let result = 0;
        archive.map( (el:IArchiveItem) => result = result + Number(el.score))
        return Math.round(result / archive.length);
    }

  if (archive.length === 0) {
    return(
        <ContentBlock>
         <h2>Your history is empty so far</h2>
        </ContentBlock>
    )
  }
    return(
        <ContentBlock>
          <h2>{`Your average score is : ${averageScore()}%`}</h2>
          <div className="archive-box-wrapper">
          {archive.map( (el: IArchiveItem) => {
            return(
                <div className="acrchive-block__item" key={el.id}>
                    <h5>{`You played on: ${new Date(el.date).toDateString()}`} </h5>
                    <h5>{`Your score was: ${el.score}%`}</h5>
                </div>
            )
          })}
          </div> 
        </ContentBlock>
    )
}

export default QuizArchive;