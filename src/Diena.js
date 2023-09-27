import Stunda from "./Stunda"

function Diena (props) {
   
    return (
<>    
    <h2>{props.nosaukums}</h2>
    <ol>
    <Stunda name={props.stundas[0]} />
    <Stunda name={props.stundas[1]} />
    <Stunda name={props.stundas[2]} />
    <Stunda name={props.stundas[3]} />
    </ol>
    </>
    );
}

export default Diena;