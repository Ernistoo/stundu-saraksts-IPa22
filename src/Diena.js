import Stunda from "./Stunda"

function Diena (props) {

    const stunduSarakstsJSX = props.stundas.map((stunda, i) => {
    return <tr><Stunda key={i} name={stunda}/></tr>
    })
   
    return (
    <>
    <h2>{props.nosaukums}</h2>
    <table>
    {stunduSarakstsJSX}
    </table>
    </>
    
    );
}

export default Diena;