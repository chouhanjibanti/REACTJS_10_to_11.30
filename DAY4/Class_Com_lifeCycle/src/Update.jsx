import React, { Component } from "react";

class Update extends Component{

     componentDidUpdate(preprops){

        if(preprops.number != this.props.number){
            console.log("component updated");
        } 
     }

      render(){
            return(
                <div>
                    <h1>{this.props.number}</h1>
                </div>
            )
        }
}

export default Update;