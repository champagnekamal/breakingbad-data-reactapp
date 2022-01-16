import './App.css'
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'


function App() {
    const [characters, setcharacters] = useState([]);
    const getData = async () => {
        const response = await fetch('https://breakingbadapi.com/api/characters');
        setcharacters(await response.json());


    }

    useEffect(() => {

        getData();
    })

    return <>
        {
            characters.map((curElem) => {
                return (

                    <div key={curElem.id}>

                        <div className="container">
                            <div className="items"><h1>{curElem.name}</h1></div>
                            <div className="items"><h2> <span>His occupation is -> </span>{curElem.occupation}</h2></div>
                            <div className="items"><h2>  <span>His birth date is -> </span>{curElem.birthday}</h2></div>
                            <div className="items"><h2>  <span>His status is -> </span>{curElem.status}</h2></div>
                            <Link to="/item">Know more about him</Link>
                          
                        </div>
                    </div>
                )
            })
        }



    </>


};

export default App;
