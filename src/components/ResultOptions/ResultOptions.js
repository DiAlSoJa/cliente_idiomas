const ResultOptions = ({seleccion=[]}) => {

    return ( 
        <div>
            <div>
                <div>
                    numero 
                </div>
                <div>

                </div>
            </div>
            <table className="tabla-seleccion">
                <thead>
                    <tr>
                        <th>verbos:</th>
                    </tr>
                </thead>
                <tbody>
                    {seleccion.map((verbo,index)=>{
                        return(
                            <tr key={index} o>
                                <td>{verbo.verbo}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default ResultOptions;