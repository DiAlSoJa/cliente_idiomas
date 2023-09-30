import React from 'react';
import { Navigate, Route,Routes } from 'react-router-dom';

import './App.css';
import phrasalVerbs from "./data/phrasal";
import {WriteQuizProvider} from "./contextos/WriteQuestionContext";
import Quiz from "./pages/Quiz/Quiz";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import NotFound from './pages/NotFound/NouFound';
import Post from './pages/Post/Post';
import TextoQuiz from './components/TextoQuiz/TextoQuiz';

const pregunta = {
      texto: "I _ a taxi when I'm late. yo soy _ jimenez _ jeje",
      respuestas: ["mm","pedro", "lopez"]
  }
function App() {
  return (
    <div className="container">
      <Header></Header>
      {/* <TextoQuiz pregunta={pregunta}></TextoQuiz> */}
      <Routes>


        <Route path='/'>
          <Route index element={<Home/>}/>

          <Route path='verbos-irregulares' element={<Post pagina={"verbos-irregulares"}/>}></Route>
          <Route path='verbos-irregulares/quiz' element={ <WriteQuizProvider><Quiz data={phrasalVerbs}/></WriteQuizProvider>}></Route>

          <Route path='verbos-regulares' element={<Post pagina={"verbos-regulares"}/>}></Route>
          <Route path='verbos-regulares/quiz' element={ <WriteQuizProvider><Quiz data={phrasalVerbs}/></WriteQuizProvider>}></Route>

          <Route path='phrasal-verbs' element={<Post pagina={"phrasal-verbs"}/>}></Route>
          <Route path='phrasal-verbs/quiz' element={ <WriteQuizProvider><Quiz data={phrasalVerbs}/></WriteQuizProvider>}></Route>

          <Route path='/notfound' element={<NotFound/>}/>
          <Route path='*' element={<Navigate to="/notfound"/>}/>
        </Route>
      </Routes> 
       
    </div>
  );
}

export default App;
