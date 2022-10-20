function FetchComponent(){

const [data, setData] = useState([]);

apiGet=()=>{

fetch("URL").then((response)=>response.json).then(json=>{
    console.log(json);
setData(json)
})

}


    return (
<>
<h1>Fetch API</h1>
<button onClick={apiGet}>Fet API get call</button>
{JSON.stringify(data)}
</>
    );
}