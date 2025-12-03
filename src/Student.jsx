import React, { Component } from 'react'

 class Student extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
  render() {
    return (
      <div>Student</div>
    )
  }
}
export default Student