import React from 'react';



export default function Alert(props) {
    return(
   
    
   props.alert &&<div className="alert alert-success alert-dismissible fade show m-3" role="alert">
   <strong>{props.alert.msg}{props.alert.data}</strong>
    
      
    
  </div>
  
  )

    


}

