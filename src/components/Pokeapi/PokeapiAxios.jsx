// Usamos Chortcut rafc para crear estructura de componente
// Importamos el hook useEffect
import React,{useEffect,useState} from 'react';
import axios from "axios";

const PokeapiAxios = () => {
    const [poke, setPoke] = useState(null);
    const [loadData,setLoadData] = useState(false)

    const getCoverData = async () => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=800`)
        .then((res) => {
            setPoke(res.data.results);
        })
        .catch((error) => {
           console.log(error);
        });
    };

    useEffect(() => {
        getCoverData();
    }, []);


    const onClick = (e) => {
        e.preventDefault();
        setLoadData(true);
        console.log('poke-->',poke)
    };

    return (
        <> 
            <button className="contentForm__btn" onClick={onClick}>
                Load Axios Pokemon
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

export default PokeapiAxios
