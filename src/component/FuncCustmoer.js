
import React,{useState,useEffect} from 'react';

function FuncCustmoer() {
    let [dogImage,setDogImage]=useState(null)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random/4").then(responce=>responce.json()).then(data=>setDogImage(data.message))},[])
    
    return (
        <div className="app">
            <h1>Functional Component Example</h1>

         {dogImage && dogImage.map((dog) => <img width={"200px"} height={"200px"} src={dog}></img>)}

        </div>
    )
}

export default FuncCustmoer
