import React, { useEffect, useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import img from "./fliplogo.JPG"


export default function MongoD() {

    const [data, setData] = useState([]);
    useEffect(() => {

        // const url = "http://localhost:8081/"
        axios.get("http://localhost:8081/")
            .then((res) => {
                setData(res.data)




            }).catch(error => {
                this.setData(error);
            })
    }, []);
    console.log(data)


    return (
        <>
            <div id="nv1" className="container-fluid">
                <nav className="navbar navbar-expand bg-primary navbar-dark">
                    <div className="container-fluid">
                        <img src={img} alt="flipkart" className="img-fluid rounded " style={{ height: "65px" }} /></div>
                    <div className="input-group rounded">
                        <input type="search" className="form-control " placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <span className="input-group-text border-0  " id="search-addon">
                            <button className="btn btn-dark  " style={{ color: "white" }}>Search</button>
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
            <div className="row justify-content-between mr-2" id="root" style={{display:"flex"}}>
            {data.map(function (item) {
                return (
                    <>




                        <div className="row justify-content-between mr-2" id="root">
                            <div className="col-md-2 mx-2 my-4">
                                <div className="card  bg-info ">
                                    <img src={item.img} alt="" className="card-image-top" />
                                    <div className="card-body">
                                        <h3>{item.company} {item.model}</h3>
                                        <li><strong>Processer :</strong> 8 GB</li>
                                        <li><strong>RAM :</strong> {item.RAM}</li>
                                        <li><strong>ROM :</strong> {item.ROM}</li>
                                        <li><strong>Camera:</strong> {item.camera}</li>
                                        <li><strong>Display :</strong> {item.Display}</li>
                                        <li><strong>Warranty :</strong> {item.Warranty}</li>
                                        <div className="text-center mt-3"><button className="btn btn-dark">BUY NOW</button></div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                )
            })}
            </div>
            <div className="container-fluid bg-primary"  >
                <h2 style={{ padding: "20px", textAlign: "center" }} id="h">&copy;ALL RIGHTS RESERVED BY FLIPKART</h2>
            </div>


        </>
    )
}
