import Stunda from "./Stunda";
import style from "./Diena.module.css";


function Diena (props) {

    const stunduSarakstsJSX = props.stundas.map((stunda, i) => {
    return <tr><Stunda key={i} name={stunda}/></tr>
    })
   
    return (
    <>
    <h2 className={style.yeah}>{props.nosaukums}</h2>
    <table>
    {stunduSarakstsJSX}
    </table>
    </>
    
    );
}

export default Diena;