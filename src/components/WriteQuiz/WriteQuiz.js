import React, { useContext, useEffect, useState } from 'react';
import WriteQuestion from '../WriteQuestion/WriteQuestion';
import Result from '../Result/Result';
import { WriteQuizContext } from '../../contextos/WriteQuestionContext';

const WriteQuiz = ({data}) => {
    const {contador,setVerbos,score,checkAnswer,showResult,numeroPreguntas} = useContext(WriteQuizContext);
    const [insert,setInsert]=useState(false);

    useEffect(()=>{
        setVerbos(data);
        setInsert(true);
    },[data,setVerbos]);

    return ( 
        <>
         {contador<=numeroPreguntas
        ?
        <> 
        {insert&&
        <>
          <div className='contador'>
            <span>{contador}/{data.length}</span>
          </div>

          <WriteQuestion question={contador-1}/>
          {(!showResult)&&
          
            <div className='btn-container'>
              <button className='btn' onClick={checkAnswer}>Comprobar</button>
            </div>
          }
        </>
        }

        
        </>
        :
          <Result score={score}/>
        } 
      </>
     );
}
 
export default WriteQuiz;