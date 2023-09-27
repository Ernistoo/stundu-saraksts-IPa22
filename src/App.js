import Diena from "./Diena";



function App() {
  const pirmdienasStundas = [
    "Nav Pupsiks :(",
    "Nav Pupsiks :(",
    "Pupsiks",
    "Pupsiks"
  ]
  const otrdienasStundas = [
    "Nav Pupsiks :(",
    "Nav Pupsiks :(",
    "Nav Pupsiks :(",
    "Nav Pupsiks :("
  ]
  const tresdienasStundas = [
    "Nav Pupsiks :(",
    "Nav Pupsiks :(",
    "Pupsiks",
    "Pupsiks"
  ]
  const ceturtdienasStundas = [
    "Pupsiks",
    "Nav Pupsiks :(",
    "Nav Pupsiks :(",
    "Nav Pupsiks :("
  ]
  const piektdienasStundas = [
    "Nav Pupsiks :(",
    "Nav Pupsiks :("
  ]
  return (
    
    <>
    <h1>Hi mom</h1>
    <Diena nosaukums="Pirmdiena" stundas={pirmdienasStundas}/>
    <Diena nosaukums="Otrdiena" stundas={otrdienasStundas}/>
    <Diena nosaukums="Tresdiena" stundas={tresdienasStundas}/>
    <Diena nosaukums="Ceturtdiena" stundas={ceturtdienasStundas}/>
    <Diena nosaukums="Piektdiena" stundas={piektdienasStundas}/>
    </> 
  );
}

export default App;
