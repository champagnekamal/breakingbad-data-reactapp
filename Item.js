import React from 'react';
import { useEffect, useState } from 'react';


export const Item = () => {
    const [characters, setcharacters] = useState([]);
    

 const getData = async () => {
        const response = await fetch('https://breakingbadapi.com/api/characters');
        setcharacters(await response.json());
 }

 useEffect(() => {

        getData();
    })
    return (
        <div>
             {
            characters.map((curElem) => {
                return (

                    <div key={curElem.id}>

                        <div className="container">
                            <div className="items"><h1>{curElem.name}</h1></div>
                            <div className="items"><h3><img src={curElem.img} alt="" /></h3></div>
                            <div className="items"><h3> <span>His occupation is -> </span>{curElem.occupation}</h3></div>
                            <div className="items"><h3>  <span>His birth date is -> </span>{curElem.birthday}</h3></div>
                            <div className="items"><h3>  <span>His status is -> </span>{curElem.status}</h3></div>
                            <div className="items"><h3>  <span>His nickname is -> </span>{curElem.nickname}</h3></div>
                            <div className="items"><h3>  <span>His appearance is -> </span>{curElem.appearance}</h3></div>
                            <div className="items"><h3>  <span>He portrayed  -> </span>{curElem.portrayed}</h3></div>
                            <div className="items"><h3>  <span>His category is -> </span>{curElem.category}</h3></div>
                           
                           

                          
                          
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Item;
