import posts from "../../data/posts";
import phrasalVerbs from "../../data/phrasal";
import irregularVerbs from "../../data/irregular"
import regularVerbs from "../../data/regular"
import Tabla from "../../components/Tabla/Tabla";
import "./Post.css";


const Post = () => {

    return ( 
        <main className="post">
            <div className="exam-cartel">
                <h2>Repasar estos verbos</h2>
                <div>
                    <p>Haz un examen para interiorisar tus conocimietos en los verbos {posts[0].pagina}</p>
                    <a className="btn" href={"/"+posts[0].pagina+"/quiz"}>Empezar examen</a>
                </div>
            </div>
            <article>
                <h2>{posts[0].titulo}</h2>
                <div dangerouslySetInnerHTML={{ __html: posts[0].contenido }}></div>
                {/* <Tabla data={(posts.pagina==="verbos-irregulares")? irregularVerbs: pagina==="verbos-regulares"? regularVerbs:pagina==="phrasal-verbs"? phrasalVerbs:""} ></Tabla> */}

               
            </article>
        </main>
     );
}
 
export default Post;