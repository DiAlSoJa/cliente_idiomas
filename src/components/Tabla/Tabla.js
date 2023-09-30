const Tabla = ({data}) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>verbo</th>
                    {data[0].pasado&&<th>Pasado / participio</th>}
                    <th>traduccion</th>
                </tr>
            </thead>
            <tbody>
                {data.map((verbo,index)=>{
                    return(
                        <tr key={index}>
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
 
export default Tabla;