// Usamos Chortcut rafc para crear estructura de componente
// Importamos el hook useEffect
import React,{useEffect,useState} from 'react';

const Pokeapi = () => {
    const [poke, setPoke] = useState(null);
    const [loadData,setLoadData] = useState(false)

    const fetchData = async () => {
        let url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
        try {
            const response = await fetch(url);
            let data = await response.json();
            setPoke(data.results) 
        }catch (error) {
            console.log('error carga datos impreso');
        }
      
    }
    useEffect(() => {
        fetchData();
    }, []);


    const onClick = (e) => {
        e.preventDefault();
        setLoadData(true);
    };

    return (
        <> 
            <button className="contentForm__btn" onClick={onClick}>
                Load Fetch Pokemon
            </button>
            <ul className="listas">
                {loadData?
                poke.map((onePoke,index)=><li key={index}>{onePoke.name}</li>)
                :
                null
                }
            </ul>
        </>
    )
}

export default Pokeapi
