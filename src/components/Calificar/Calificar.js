const Calificar = ({verificationResult,answer,onClick}) => {
    return ( 
        <div className={`result-container ${ (verificationResult)&& "correct"}`}>
            <div>
                {verificationResult ? (
                    <p>¡Respuesta correcta!</p>
                ) : (
                    <p>Respuesta incorrecta. La respuesta correcta es <span>"{answer}"</span></p>
                )}

            </div>
            <div>
                <button onClick={onClick} className="btn">
                    Continuar
                </button>
            </div>
        </div>
     );
}
 
export default Calificar;