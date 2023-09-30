import React, { useEffect, useState } from 'react';
import "./TextoQuiz.css";
const QuizApp = ({pregunta=null}) => {
    const [inputs, setInputs] = useState([]);


    useEffect(()=>{
        if(pregunta) setInputs(Array(pregunta.respuestas.length).fill(''));
    },[pregunta])

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const lineToInput = () => {
    const newText = pregunta.texto.split("_");

    return(
    <div className='text-container'>
        <p>
            {
            pregunta.respuestas.map((respuesta, index) =>(
            <React.Fragment key={index}>
                <span>{newText[index]}</span>
                <input
                    key={index}
                    type="text"
                    value={inputs[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    style={
                        { width: `${(inputs[index].length>=respuesta.length)?inputs[index].length+3:respuesta.length+2}ch`}
                    }
                />
                {(index+1) === pregunta.respuestas.length && <span>{newText[index+1]}</span>}
            </React.Fragment>
            ))
            }
        </p>
    </div>) 
  };

  return (
    <div>
      <h1>Quiz de Inglés</h1>
        {pregunta&&
        <>
            {inputs.length>0&&lineToInput()}
            <button>Enviar respuesta</button>
        </>
        }

    </div>
  );
};

export default QuizApp;