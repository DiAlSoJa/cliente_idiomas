// PhrasalVerbsContext.js
import React, { createContext,useState} from 'react';

// Crear el contexto
export const WriteQuizContext = createContext();

// Crear un componente proveedor
export function WriteQuizProvider({ children}) {
    const [score,setScore] = useState(0);
    const [contador,setContador] = useState(1);
        
    const [answer, setAnswer] = useState("");
    const [verificationResult, setVerificationResult] = useState(null); // Estado para el resultado de la verificación
    const [showResult, setShowResult] = useState(false); // Estado para controlar la visualización del resultado
    const [result, setResult] = useState("");
    const [numeroPreguntas,setNumeroPreguntas] =useState(5);
    const [verbos,setVerbos]= useState({})
    const answerOnChange = (e) => setAnswer(e.target.value);

    const checkAnswer = () => {
        const respuestas =verbos[contador-1].traduccion.toLowerCase().split(" / ");
      
        const isCorrect = respuestas.includes(answer.toLowerCase());
        setVerificationResult(isCorrect);
        setShowResult(true);
        if(isCorrect){
            setResult("correct");
            setScore(prev=>prev+1);
        }
        else setResult("incorrect");
        
    };
    
    const cambiarPregunta=()=>{

        setContador(prev=>prev+1);
        setAnswer("");
        setResult("");
        setShowResult(false);
    }




    const data={
        checkAnswer,
        score,
        contador,
        verificationResult,
        showResult,
        result,
        answerOnChange,
        answer,
        setVerbos,
        verbos,
        cambiarPregunta,
        numeroPreguntas,
        setNumeroPreguntas
    }
    return (
        <WriteQuizContext.Provider value={data}>
            {children}
        </WriteQuizContext.Provider>
    );
}

