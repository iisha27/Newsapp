import React, { Component } from 'react'
import loading from "./loading.gif";  

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center ">
        <img className="my-3" src={loading} alt="loading" width={30} height={30}/>
      </div>
    )
  }
}

export default Spinner;
