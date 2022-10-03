import React from 'react';
import ReactDOM from 'react-dom/client';
import './appStyles.css';
import './index.css';

// components
import AppNavigator from './components/AppNavigator';
import Dictionary from './pages/Dictionary';
import WordAdder from './pages/WordAdder';
import Quiz from './pages/Qiuz';
import QuizArchive from './pages/QiuzArchive';
import QuizResut from './pages/QiuzResult';
import ErrorPage from './pages/ErrorPage';

//browser router
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//redux
import { Provider } from 'react-redux';
import store from './redux/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <AppNavigator/>
    <Routes>
    <Route path='/' element={<Dictionary/>}/>
    <Route path='/add-the-word' element={<WordAdder/>}/>
    <Route path='/quiz' element={<Quiz/>}/>
    <Route path='/quiz-result' element={<QuizResut/>}/>
    <Route path='/quiz-history' element={<QuizArchive/>}/>
    <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
  );
