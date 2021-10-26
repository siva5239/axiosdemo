import React, { Component } from 'react'

export class Login extends Component {
    constructor(props){
        super(props)
        this.state= {
            username:"",
            password:""
        }
        this.login=this.login.bind(this);
    }
    login(){
        alert("CALLING LOGIN METHOD....."+this.state.username+this.state.password);
        if((this.state.username==="admin")===(this.state.password==="password")){
            alert("if...method..calling...");
            
        }
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter Your Username" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}/><br/><br/>
                <input type="password" placeholder="Enter Your Password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} /><br/><br/>
                <button className="btn btn-primary" onClick={this.login}>Login</button>               
            </div>
        )
    }
}
            
export default Login
