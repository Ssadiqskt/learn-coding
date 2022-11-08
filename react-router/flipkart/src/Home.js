import React, { Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import img from "./fimages/fliplogo.JPG";
import img1 from "./fimages/flip2.jpeg";
import img2 from "./fimages/flip3.jpeg";
import img3 from "./fimages/flip4.jpeg";
import img4 from "./fimages/flip5.jpeg";
import img5 from "./fimages/flip6.jpeg";
import img6 from "./fimages/flip7.jpeg";
import img7 from "./fimages/flip8.jpeg";
import img8 from "./fimages/flip9.jpeg";
import img9 from "./fimages/flip10.jpeg";
import img10 from "./fimages/flip11.jpeg";

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      product1: {username:"oneplus 10 pro"},
      product2: {username:"oneplus 9 pro"}
      
    }

  }
  send() {
    const url = "https://reqres.in/api/tutorials"
    axios.post(url, this.state)
      .then(function (res) {
        console.table(res)
      })
      .catch(function (err) {
        console.log(err)
      });

  }
  style1 = {
    height: "65px"
  }
  style2 = {
    color: "white"
  }
  style3 = {
    padding: "20px",
    textAlign: "center"
  }

  render() {

    return (
      <>
        <div id="nv1" className="container-fluid">
          <nav className="navbar navbar-expand bg-primary navbar-dark">
            <div className="container-fluid">
              <img src={img} alt="flipkart" className="img-fluid rounded " style={{height: "65px"}} /></div>
            <div className="input-group rounded">
              <input type="search" className="form-control " placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <span className="input-group-text border-0  " id="search-addon">
                <button className="btn btn-dark  " style={{color: "white"}}>Search</button>
              </span>
            </div>
            <div className="container-fluid justify-content-end">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/" data-bs-toggle="modal" data-bs-target="#mylogin">MENU</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/" data-bs-toggle="modal" data-bs-target="#mysignup">LOGOUT</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>



        <div className="row justify-content-between mr-2" id="root">
          <div className="col-md-2 mx-2 my-4">
            <div className="card text-center bg-info ">
              <img src={img1} alt="" className="card-image-top" />
              <div className="card-body">
                <h3>{this.state.product2.username}</h3>
                <p><strong>RAM :</strong> 8 GB</p>
                <p><strong>ROM :</strong> 126 GB</p>
                <button className="btn btn-dark">BUY NOW</button>

              </div>
            </div>
          </div>




          <div className="col-md-2  mx-2 my-4">
            <div className="card text-center bg-info">
              <img src={img2} alt="" className="card-image-top" />
              <div className="card-body">
                <h3>Google pixel</h3>
                <p><strong>RAM :</strong> 8 GB</p>
                <p><strong>ROM :</strong> 126 GB</p>
                <button className="btn btn-dark">BUY NOW</button>

              </div>
            </div>
          </div>




          <div className="col-md-2 mx-2 my-4">
            <div className="card text-center bg-info ">
              <img src={img3} alt="" className="card-image-top" />
              <div className="card-body">
                <h3>Soney xperia</h3>
                <p><strong>RAM :</strong> 8 GB</p>
                <p><strong>ROM :</strong> 126 GB</p>
                <button className="btn btn-dark">BUY NOW</button>

              </div>
            </div>
          </div>




          <div className="col-md-2 mx-2 my-4">
            <div className="card text-center bg-info">
              <img src={img4} alt="" className="card-image-top" />
              <div className="card-body">
                <h3>Oneplus 10 pro</h3>
                <p><strong>RAM :</strong> 8 GB</p>
                <p><strong>ROM :</strong> 126 GB</p>
                <button className="btn btn-dark">BUY NOW</button>

              </div>
            </div>
          </div>




          <div className="col-md-2 mx-2 my-4">
            <div className="card text-center bg-info ">
              <img src={img5} alt="" className="card-image-top" />
              <div className="card-body">
                <h3>Oneplus 7 pro</h3>
                <p><strong>RAM :</strong> 8 GB</p>
                <p><strong>ROM :</strong> 126 GB</p>
                <button className="btn btn-dark">BUY NOW</button>

              </div>
            </div>
          </div>




          <div className="col-md-2 mx-2 my-4">
            <div className="card text-center bg-info">
              <img src={img6} alt="" className="card-image-top" />
              <div className="card-body">
                <h3>Redmi note 5</h3>
                <p><strong>RAM :</strong> 8 GB</p>
                <p><strong>ROM :</strong> 126 GB</p>
                <button className="btn btn-dark">BUY NOW</button>

              </div>
            </div>
          </div>




          <div className="col-md-2 mx-2 my-4">
            <div className="card text-center bg-info">
              <img src={img7} alt="" className="card-image-top" />
              <div className="card-body">
                <h3>Iphone 11</h3>
                <p><strong>RAM :</strong> 8 GB</p>
                <p><strong>ROM :</strong> 126 GB</p>
                <button className="btn btn-dark">BUY NOW</button>

              </div>
            </div>
          </div>




          <div className="col-md-2 mx-2 my-4">
            <div className="card text-center bg-info">
              <img src={img8} alt="" className="card-image-top" />
              <div className="card-body">
                <h3>Vivo x50</h3>
                <p><strong>RAM :</strong> 8 GB</p>
                <p><strong>ROM :</strong> 126 GB</p>
                <button className="btn btn-dark">BUY NOW</button>

              </div>
            </div>
          </div>




          <div className="col-md-2 mx-2 my-4">
            <div className="card text-center bg-info">
              <img src={img9} alt="" className="card-image-top" />
              <div className="card-body">
                <h3>Iqoo 4 pro</h3>
                <p><strong>RAM :</strong> 8 GB</p>
                <p><strong>ROM :</strong> 126 GB</p>
                <button className="btn btn-dark">BUY NOW</button>

              </div>
            </div>
          </div>




          <div className="col-md-2 mx-2 my-4">
            <div className="card text-center bg-info">
              <img src={img10} alt="" className="card-image-top" />
              <div className="card-body">
                <h3>Samsung S21</h3>
                <p><strong>RAM :</strong> 8 GB</p>
                <p><strong>ROM :</strong> 126 GB</p>
                <button className="btn btn-dark">BUY NOW</button>
              </div>
            </div>
          </div>



        </div>

        <div className="container-fluid bg-primary"  >
          <h2 style={{padding: "20px",textAlign: "center"}} id="h">&copy;ALL RIGHTS RESERVED BY FLIPKART</h2>
        </div>

      </>
    )
  }
}

    













