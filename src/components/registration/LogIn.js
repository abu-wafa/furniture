import React, { Component } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



// import Data from "./data";


toast.configure()
export default class Login extends Component {
        
    state={
        // _data:Data,
        txt_Mail:"",
        txt_pass:"",
    }

    submitHundler=(e)=>{
        e.preventDefault();
        let userExist= false;
        // for (let i= 0; i < this.state._data.length; i++) { 
        //     if (this.state.txt_Mail==this.state._data[i].Email && this.state.txt_pass==this.state._data[i].password) {
        //         toast.success(`welcome ${this.state._data[i].FirstName}`,{position: toast.POSITION.TOP_RIGHT,autoClose:3000})
        //         console.log("it worked");
        //         this.props.history.push("/home")
        //         userExist = true;
        //     }
        // }

        let logData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : [];
        for (let i = 0; i < logData.length; i++) {
            if(this.state.txt_Mail==logData[i].Email &&  this.state.txt_pass== logData[i].password){
                toast.success(<p>welcome <span style={{fontStyle:"italic"}}>{logData[i].FirstName}</span></p>,{position: toast.POSITION.TOP_RIGHT,autoClose:3000})
                this.props.history.push("/home") 
                userExist = true;
            }
    
        } 

        if (userExist==false) {
            document.getElementById("error").innerText="incorrect Email or password"
            this.setState({txt_Mail:"",txt_pass:""})            
            
        }
    }

    
    
    
    render() {
    
        return (
            <div className="outer">
                <div className="inner">
                    <form onSubmit={this.submitHundler}>

                        <h3>Log in</h3>

                        <div className="form-group">
                            <label>Email</label>
                            <span id="error" style={{color:"red" , padding:10}}></span>
                            <input type="email" className="form-control" placeholder="Enter email" value={this.state.txt_Mail} onChange={(e)=>this.setState({txt_Mail:e.target.value})}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <span id="error" style={{color:"red" , padding:10}}></span>
                            <input type="password" className="form-control" placeholder="Enter password" value={this.state.txt_pass} onChange={(e)=>this.setState({txt_pass:e.target.value})} />
                            <span> </span>
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>


                        <button type="submit" className="btn  btn-colers btn-lg">Sign in</button>
                        <p className="forgot-password text-right">
                            Create An Account <a href="/sign-up">sign up?</a>
                        </p>

                    </form>
                </div>
            </div>
        );
    }
}