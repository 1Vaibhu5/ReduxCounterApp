import React, { Component, lazy,Suspense } from "react";
// import Student from "./Student";

const StudentData = lazy(() => import('./Student'))

export default class Test extends Component {
  constructor() {
    super();
    this.state= {
        count:12
       }
    this.state= {
        show: "false"
       }
       console.log("constructor");
     }
  //  const= [count, setCount] =useState();
  componentDidMount(){
    console.log("component Did Mount")
  }
  componentDidUpdate(){
    console.log("component Did Update")
  }
  render() {
    console.log("render")
    return (
      <>
        <div>
          <h1>Component Life Cycle Method</h1>
          <h3>3 phases of Component life cycle</h3>
          <button style={{ margin: "10px" }}>load Component</button>
          <button style={{ margin: "10px" }}>Update Component</button>
          <button style={{ margin: "10px" }}>Remove/Unmount omponent</button>
          <h4>component will unmount</h4>
          {
            this.state.show ? 
            <Suspense fallback={<h1>loding.....</h1>}>
              <h2>preview</h2>
               <StudentData/> 
            </Suspense>
              :" child component"
          }
          <button onClick={()=> this.setState({show:!this.state.show})} >Toggle</button>
          <h3>Component Update</h3>
          <h4>count: {this.state.count}</h4>
          <button onClick={()=>this.setState({count:5})}>Increament</button>
        </div>
      </>
    );
  }
}
