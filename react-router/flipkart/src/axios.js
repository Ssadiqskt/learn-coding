import React, { useEffect, useState} from 'react';
import axios from "axios"


export default function MongoD() {

const [data, setData] = useState([]);
useEffect(()=>{

    const url = "http://127.0.0.1:27017/"
    axios.get(url)
    .then((res)=>{
        setData(res)
        console.log(res)
        .catch((err)=>{
            console.log(err)
        })
    } )
});

    return(
        <>
        <h1>Data from mongo</h1>
        {/* {data.map()} */}
        </> 
    )
}