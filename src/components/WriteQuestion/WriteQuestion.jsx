import React, { useContext } from 'react';
import { WriteQuizContext } from '../../contextos/WriteQuestionContext';
import Calificar from '../Calificar/Calificar';
const WriteQuestion = ({question}) => {
  const {result,answer,answerOnChange,showResult,verificationResult,verbos,cambiarPregunta}=useContext(WriteQuizContext)



    return (
        <div className="question">
            <div className='question-title'>
                <p>
                    <span>{verbos[question].verbo}</span>
                </p>
            </div>
            <div className='question-form'>
                <input

                    className={result}
                    type="text"
                    value={answer}
                    onChange={answerOnChange}
                    disabled={showResult}
                />
            </div>
            {showResult && (
                <Calificar 
                verificationResult={verificationResult} 
                answer={verbos[question].traduccion}
                onClick={cambiarPregunta}
                />
            )}

        </div>
    );
};

export default WriteQuestion;
