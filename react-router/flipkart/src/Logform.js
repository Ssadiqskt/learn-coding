import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function Logform() {
    const [userData, setuserData] = useState({
        UserName: "Sadiq.skt",
        PassWord: "Sadiq111"
    });
    const style = {
        borderRadius: "1rem",

    }
    // const style1 = {
    //     background: '#be1558',
    //     backdropfilter: 'blur(30px)',
    //     height:"300px",
    //     width:"450px"
    // }
    return (
        <>
        <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-white" style={style}>
                        <div className="card-body p-5 text-center">

                            <div className="mb-md-5 mt-md-4 pb-5">

                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="typeEmailX">Email</label>
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                                </div>



                                <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>



                            </div>

                           

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>

    );
}
export default Logform