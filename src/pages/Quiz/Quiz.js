import { useState,useContext } from "react";
import WriteQuiz from "../../components/WriteQuiz/WriteQuiz";
import TablaSeleccion from "../../components/TablaSeleccion/TablaSeleccion";
import phrasalVerbs from "../../data/phrasal";
import ResultOptions from "../../components/ResultOptions/ResultOptions";

import { WriteQuizContext } from '../../contextos/WriteQuestionContext';
const Quiz = () => {

  const {setNumeroPreguntas,numeroPreguntas} = useContext(WriteQuizContext);

  const [startQuiz, setStartQuiz] = useState(false);
  const [seleccion,setSeleccion] = useState([]);
  const [options, setOptions] = useState({
    numero: 5,
    manual: true,
  });
  const [mostrarElemento,setMostrarElemento] = useState(0);

  const handleOptions = (e) => {
    e.preventDefault();
    setStartQuiz(true);
  };

  const sumarMostrarElemento = () => {
    if(mostrarElemento===0){
      setSeleccion([]);
      if(!options.manual){
        const elementosAleatorios = [];

        while (elementosAleatorios.length < options.numero) {
          const indiceAleatorio = Math.floor(Math.random() * phrasalVerbs.length);
          const elementoAleatorio = phrasalVerbs[indiceAleatorio];
          
          // Evita duplicados
          if (!elementosAleatorios.includes(elementoAleatorio)) {
            elementosAleatorios.push(elementoAleatorio);
          }
        }
        setSeleccion(elementosAleatorios);
        setMostrarElemento(2)
        return;
      
      }
    }
    if(seleccion.length<numeroPreguntas && mostrarElemento ===1){
      return;
    }

    if (mostrarElemento <2) {
      setMostrarElemento(mostrarElemento + 1);
    }
    if(mostrarElemento===2) {
      setStartQuiz(true);
    }
    setNumeroPreguntas(options.numero);
  };

  const restarMostrarElemento = () => {
    if(mostrarElemento===2){
      if(!options.manual){
        return setMostrarElemento(0);
      }
    }
    if (mostrarElemento > 0) {
      setMostrarElemento(mostrarElemento - 1);
    }
  };

  const optionsOnChange = (e) => {
    const { name, type, value, checked } = e.target;

    // Si el elemento es un checkbox, actualiza el estado de acuerdo a si está marcado o no.
    // Si es un input de tipo número, actualiza el estado con su valor numérico.
    setOptions({
      ...options,
      [name]: type === "checkbox" ? checked : parseInt(value, 10),
    });
  };

  return (
    <div className="quiz">
      {startQuiz ? (
        <WriteQuiz data={seleccion}></WriteQuiz>
      ) : (
        <div className="opciones">
          {mostrarElemento === 0 ? (
            <form onSubmit={handleOptions}>
              <div className="form-group">
                <label>Número de verbos:</label>
                <input
                  type="number"
                  name="numero"
                  min={5}
                  max={50}
                  value={options.numero}
                  onChange={optionsOnChange}
                />
              </div>
              <div>
                <label>Elección manual:</label>
                <input
                  type="checkbox"
                  name="manual"
                  checked={options.manual}
                  onChange={optionsOnChange}
                />
              </div>
            </form>
          ) : mostrarElemento === 1 ? (
            <TablaSeleccion data={phrasalVerbs} seleccion={seleccion} setSeleccion={setSeleccion} />
          ) : (
            /* mostrarElemento es igual a 2 */
            <ResultOptions seleccion={seleccion}/>
          )}

          <div className="botones">
            <button onClick={restarMostrarElemento}>Regresar</button>
            <button onClick={sumarMostrarElemento}>Cambiar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
