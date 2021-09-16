import { render } from "@testing-library/react";
import React from "react";

class Customer extends React.Component{
    render(){
        return(
        <div>
            <CustomerProfile project  = {this.props.project} loca= {this.props.loca} image = {this.props.image}/>
            <CustomerInfo serverName  = {this.props.serverName} ip = {this.props.ip}/>
        </div>
        )
    }
}


class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src = {this.props.image} alt="profile"/>
                <h2>{this.props.project}({this.props.loca})</h2>
              
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
   render(){
    return(
        <div>
        <p>{this.props.serverName}</p>
        <p>{this.props.ip}</p>
        </div>
    )
 }
}


export default Customer;