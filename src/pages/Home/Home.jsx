import "./Home.css";

const Home = () => {
    return ( 
        <main className="main">
            <ul className="list">
                <li>
                    <a href="/verbos-regulares" style={{"--color":"#002876"}}>
                        <span className="right" ></span>
                        <span className="left"></span>
                        <h3>Verbos Regulares</h3>
                        <p>Los verbos regulares en inglés forman el pasado y el participio pasado agregando "-ed" al infinitivo.</p>
                    </a>
                </li>
                <li>
                    <a href="/verbos-irregulares"  style={{"--color":"#7737a1"}}>
                        <span className="right"></span>
                        <span className="left"></span>
                        <h3>Verbos Irregulares</h3>
                        <p>Los verbos irregulares en inglés no siguen un patrón específico al formar el pasado y el participio pasado, y deben ser memorizados.</p>
                    </a>
                </li>
                <li>
                    <a href="/phrasal-verbs"  style={{"--color":"#0089f4"}}>
                        <span className="right"></span>
                        <span className="left"></span>
                        <h3>Verbos Phrasal</h3>
                        <p>Los verbos phrasal en inglés son combinaciones de un verbo y una o más partículas, y a menudo tienen significados diferentes a los verbos individuales.</p>
                    </a>
                </li>
                
            </ul>
        </main>
     );
}
 
export default Home;