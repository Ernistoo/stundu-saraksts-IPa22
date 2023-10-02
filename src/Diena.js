import Stunda from "./Stunda"

function Diena (props) {

    const stunduSarakstsJSX = props.stundas.map((stunda) => {
    return <Stunda name={stunda}/>
    })
   
    return (
<>    
    <h2>{props.nosaukums}</h2>
    <ol>
    {stunduSarakstsJSX}
    </ol>
    </>
    );
}

export default Diena;