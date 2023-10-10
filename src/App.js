import "./App.css"
import Diena from "./Diena";



 function App() {
//   const pirmdienasStundas = [
//     "Nav Pupsiks :(",
//     "Nav Pupsiks :(",
//     "Pupsiks :)",
//     "Pupsiks :)"
//   ]
//   const otrdienasStundas = [
//     "Nav Pupsiks :(",
//     "Nav Pupsiks :(",
//     "Nav Pupsiks :(",
//     "Nav Pupsiks :("
//   ]
//   const tresdienasStundas = [
//     "Nav Pupsiks :(",
//     "Nav Pupsiks :(",
//     "Pupsiks :)",
//     "Pupsiks :)"
//   ]
//   const ceturtdienasStundas = [
//     "Pupsiks :)",
//     "Nav Pupsiks :(",
//     "Nav Pupsiks :(",
//     "Nav Pupsiks :("
//   ]
//   const piektdienasStundas = [
//     "Nav Pupsiks :(",
//     "Nav Pupsiks :("
//   ]

const visuDienuStunduSaraksts = [
  {
    diena: "Pirmdiena",
    
    stundas: [
        "Valsts aizardzības mācība",
        "Valsts aizardzības mācība",
        "Valsts aizardzības mācība",
        "Valsts aizardzības mācība"
      ]
      // kab: [
      //   "C.304-R.Lauga/Ē. Jermacāne",
      //   "C.304-R.Lauga/Ē. Jermacāne",
      //   "C.304-R.Lauga/Ē. Jermacāne",
      //   "C.304-R.Lauga/Ē. Jermacāne"
      // ]
    
  },
  {
    diena: "Otrdiena",
    stundas: [
      "Sports",
      "'Valodas, kultūras izpratne un izpausmes'",
      "Pupsiks :)",
      "Pupsiks :)"
    ]
  },
  {
    diena: "Tresdiena",
    stundas: [
      "Angļu valoda",
      "Fizika",
      "Datorsistēmas un datortīkli",
      "Datorsistēmas un datortīkli"
    ]
  },
  {
    diena: "Ceturtdiena",
    stundas: [
      "Sociālās zinības un vēsture",
      "Latviešu valoda un literatūra",
      "Sports",
      "Pupsiks :)"
    ]
  },
  {
    diena: "Piektdiena",
    stundas: [
      "Pupsiks :)",
      "Sociālās zinības un vēsture",
      "Fizika"
    ]
  }
];

  return (
    
    <>
    <h1>Hi mom</h1>

    {
      visuDienuStunduSaraksts.map((item, i)=>{
        return <Diena className="sasa" nosaukums={item.diena} stundas={item.stundas} />
      })
    }
    </> 
  );
}


export default App;
