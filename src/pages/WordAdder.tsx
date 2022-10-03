import '.././appStyles.css';

import ContentBlock from '../components/ContentBlock';
import WordAdderForm from '../components/WordAdderForm';

function WordAdder() {

  return (
    <ContentBlock>
     <h2>WordAdder</h2>
     <WordAdderForm/>
    </ContentBlock>);
}

export default WordAdder;