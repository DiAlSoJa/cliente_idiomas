import "./TablaSeleccion.css";
import { WriteQuizContext } from '../../contextos/WriteQuestionContext';
import { useContext } from "react";
const TablaSeleccion = ({data,seleccion,setSeleccion}) => {
    const {numeroPreguntas} = useContext(WriteQuizContext);

    const handleOnclick=(verbo)=>{
         // Comprobamos si el verbo ya está en la selección
         console.log(seleccion.length,numeroPreguntas)

         if (seleccion.includes(verbo)) {
            // Si está, lo quitamos
            const nuevaSeleccion = seleccion.filter(item => item !== verbo);
            setSeleccion(nuevaSeleccion);
        }else {
            if (seleccion.length === numeroPreguntas) {
                // No se permite agregar más elementos, puedes agregar aquí una lógica adicional si es necesario
                return;
            }else setSeleccion([...seleccion, verbo]);
        };
    }

    return ( 
        <table className="tabla-seleccion">
            <div>{seleccion.length}/{numeroPreguntas}</div>
            <thead>
                <tr>
                    <th>verbo</th>
                    {data[0].pasado&&<th>Pasado / participio</th>}
                    <th>traduccion</th>
                </tr>
            </thead>
            <tbody>
                {data.map((verbo,index)=>{
                    const isSelected = seleccion.includes(verbo); // Verifica si el verbo está en la selección
                    const rowClassName = isSelected ? 'active' : ''; // Agrega la clase 'active' si está seleccionado

                    return(
                        <tr key={index} onClick={(e)=>handleOnclick(verbo)} className={rowClassName}>
                            <td>{verbo.verbo}</td>
                            {verbo.pasado&&<td>{verbo.pasado}</td>}
                            <td>{verbo.traduccion}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
     );
}
 

export default TablaSeleccion;