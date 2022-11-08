import React, { Component } from 'react'

export default class UncontrolledForm extends Component {
    constructor(props)
        {
                super(props);
                this.state={
                        value:"",value2:""
                }
                //create ref
                this.textInput=React.createRef();
                this.textInput2=React.createRef();
        }
        handleSubmit=(e)=>
        {
               e.preventDefault();
               //set the data of text field to state.
               this.setState({value:this.textInput.current.value});
               this.setState({value2:this.textInput2.current.value});
        }
       
        componentDidMount=()=>
        {
           this.textInput.current.focus();
        }
        render() {
                return (
                        <div>
                           <h1>You Enter Name : {this.state.value}</h1>
                           <h1>You Enter Pass : {this.state.value2}</h1>
                           
                           <form onSubmit={this.handleSubmit}>
                              Name : <input type="text" ref={this.textInput} />
                              Password : <input type="text" ref={this.textInput2}/>
                              <input type="submit" value="submit"/>
                           </form>
                        </div>
                )
        }
}
