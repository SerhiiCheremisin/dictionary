import { appRoutes } from '../services/routes';
import { useEffect } from 'react';
import { getData } from '../services/api'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { updateDictionary, setDictionary } from '../redux/reducers/dicrionaryReducer';
import { setShuffledArray } from '../redux/reducers/quizReducer';
import { shuffle } from '../services/commonFunctions';
import { IDictionaryItem, IRoute } from '../types/commonTypes';

//components
import NavigationItem from '../components/NavigationItem';

const AppNavigator = ():JSX.Element => {
const dispatch :AppDispatch  = useDispatch();
const isUpdaneNeeded = useSelector( (state:RootState) => state.dictionaryReducer.needToUpdate);

const getWords = () => {
    getData('words')
    .then( data => {
        const stateCopy: IDictionaryItem[] = [...data];
        const shuffleledArray:IDictionaryItem [] = shuffle(stateCopy);
        dispatch(setShuffledArray(shuffleledArray.slice(0,10)));
        dispatch(setDictionary(data));
    })
}

useEffect(() => {
    getWords();
    }, [])

useEffect(() => {
    if (isUpdaneNeeded) {
        getWords();
        dispatch(updateDictionary(false));
    }
    return
},[isUpdaneNeeded])

    return(
        <nav className="navigation">
            <ul>
             { appRoutes.map ( (route:IRoute, id:number ) => {
               return <NavigationItem key={id} route = {route.route} url = {route.url}/>
             })} 
            </ul>
        </nav>
    )
}

export default AppNavigator;