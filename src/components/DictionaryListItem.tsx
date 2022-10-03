import { IDictionaryItem } from '../types/commonTypes';

const DictionaryListItem  = ( {eng, ua} : IDictionaryItem):JSX.Element => {
  
    return(
        <li className='dictionary-list-item'>
          <div>{eng}</div> 
          <div>{ua}</div>
        </li>
    )
}

export default DictionaryListItem;