import "./App.css"
import Diena from "./Diena";
import styles from "./App.module.css";
import { useEffect , useState} from 'react';

 function App() {
   const [lessons, setLessons] = useState([]);
   const [loading, setLoading] = useState(true);

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
      '"Valodas, kultūras izpratne un izpausmes"',
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
useEffect (() => {
  async function getData() {
    const response = await fetch(
      "https://cheese-cake.onthewifi.com/api/lessons"
    );
    const data = await response.json();
    console.log(data.IPa22[4].classes);

    const preparedData = [
      {diena: "Pirmdiena",
    stundas: data.IPa22[0].classes
    }
    {diena: "Pirmdiena",
    stundas: data.IPa22[0].classes
    }
    {diena: "Pirmdiena",
    stundas: data.IPa22[0].classes
    }
    {diena: "Pirmdiena",
    stundas: data.IPa22[0].classes
    }
    {diena: "Pirmdiena",
    stundas: data.IPa22[0].classes
    }
    {diena: "Pirmdiena",
    stundas: data.IPa22[0].classes
    }
    {diena: "Pirmdiena",
    stundas: data.IPa22[0].classes
    }
    {diena: "Pirmdiena",
    stundas: data.IPa22[0].classes
    }
    ]

    setLessons(data);
    setLoading(false);
  }
  getData();
}, []);

const visaSarakstaJSX = visuDienuStunduSaraksts.map((diena) => {
  return (
    <Diena
    key={diena.diena}
    nosaukums={diena.diena}
    stundas={diena.stundas}
    />
  );
})


  return (
    <>
    <h1 className={styles.hello}>Hi mom</h1>
    {loading ? <p>Loading...</p> : visaSarakstaJSX}
    {/* {
      visuDienuStunduSaraksts.map((item, i)=>{
        return <Diena className="sasa" nosaukums={item.diena} stundas={item.stundas} />
      })
    } */}
    </> 
  );
}


export default App;
