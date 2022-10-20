
import React, { useState } from 'react'
import './App.css';
function App(props) {
  const capsit = () => {
     
     let cap = text.toUpperCase();
     setText(cap)
  };
  const letchange = (event) => {
    setText(event.target.value)
  };

   const clear = ()=>{
    setText(" ")
   }


  const [text, setText] = useState(" ")

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.link1}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.link2}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.link3}</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container mb-3 mx-3 my-3">
        <h1>Enter your text here</h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={letchange} value={text}></textarea>
      </div>
      <div className="container mb-3 mx-3 my-3">
        <button type="button" className="btn btn-primary my-3" onClick={capsit}>Capitalise</button>
        <button type="button" className="btn btn-primary my-3 mx-3" onClick={clear}>Clear</button>
      </div>
    </>
  );
}

export default App;
