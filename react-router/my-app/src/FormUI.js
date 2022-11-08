import logo from './logo.svg';
import './App.css';
import pic from './logo.svg';
import Form from './Signup';
import Signup from './Signup';
function FormUI() {
  return (
    <>
     <div className="container mt-5">
      <div className="row">
        <div className="col-sm-5">
         <Signup></Signup>
        </div>
        <div className="col-sm-7">
          <img src={pic}/>
        </div>
      </div>
     </div>
    </>
   
  );
}

export default FormUI;