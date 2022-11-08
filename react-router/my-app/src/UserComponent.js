import React, { Component } from 'react'
import ContactComponent from './ContactComponent'

export default class UserComponent extends Component {

    state={name:"raju"}
  render() {
    return (
      <ContactComponent name={this.state.name}/>
      //<h1>{this.state.name}</h1>
    )
  }
}
