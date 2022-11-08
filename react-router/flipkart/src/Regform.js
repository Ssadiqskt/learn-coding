import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Alert from './Alert';
import axios from "axios"



export default function Regform(props) {

    const [data, setdata] = useState({
        UserName: "",
        PassWord: ""
    });

    const [userInfo, setUserInfo] = useState([]);
    const [alert, setAlert] = useState(null);

    const showAlert = (msg, data) => {
        setAlert({
            msg: msg,
            data: data
        }
        )



    }


    function onChange(e) {
        const name = e.target.name;
        const value = e.target.value
        setdata({ ...data, [name]: value });

    }
    function onSubmit(e) {

        e.preventDefault();

        const newInfo = { ...data,  }
        const gotdata = newInfo.UserName;
        const gotdata2 = newInfo.PassWord;

        const url = "https://reqres.in/api/tutorials"
        axios.post(url , newInfo)
        .then(function (res){
            console.log(res)
        })
        .catch(function(err){
            console.log(err)
        });
        
        showAlert(`UserName : ${gotdata}  ` , `PassWord : ${gotdata2}`)

        setUserInfo([...userInfo, newInfo])

        

        setdata({
            UserName: "",
            PassWord: ""
        })


    }


    const style2 = {
        background: '#d4cdcd',
        backdropfilter: 'blur(30px)'
    }
    return (
        <>
            <section className="text-center">




                <div className="card mx-4 mx-md-5 shadow-5-strong" style={style2}>

                    <Alert alert={alert} />


                    <div className="card-body py-5 px-md-5">

                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="fw-bold mb-5">Register now</h2>
                                <form onSubmit={onSubmit}>




                                    <div className="form-outline mb-4">
                                        <input type="text" id="form3Example3" className="form-control" name="UserName" value={data.UserName} onChange={onChange} autoComplete="off" />
                                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="password" id="form3Example4" className="form-control" name="PassWord" value={data.PassWord} onChange={onChange} autoComplete="off" />
                                        <label className="form-label" htmlFor="form3Example4">Password</label>
                                    </div>





                                    <button type="submit" className="btn btn-primary btn-block mb-4" >
                                        Register
                                    </button>



                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    );

}






