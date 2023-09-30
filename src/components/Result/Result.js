import "./Result.css";

const Result = ({score}) => {

    return ( 
        <div className='result'>
            <div className='result-flex'>
                <span>Usuarios</span>
                <span className='bold'>{"dialfred"}</span>
            </div>
            <div className='result-flex'>
                <span>Total Quiz Points : </span>
                <span className='bold'>{score || 0}</span>
            </div>
            <div className='result-flex'>
                <span>Total Questions : </span>
                <span className='bold'>{  0}</span>
            </div>
            <div className='result-flex'>
                <span>Total Attempts : </span>
                <span className='bold'>{ 0}</span>
            </div>
            <div className='result-flex'>
                <span>Total Earn Points : </span>
                <span className='bold'>{0}</span>
            </div>
            <div className='result-flex'>
                <span className='bold'>Pasado</span>
               
            </div>
           
        </div>
     );
}
 
export default Result;