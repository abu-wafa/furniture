import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
// import Data from './data'

toast.configure()

 let SignUp=()=>{

    const history = useHistory();
    //form validation
    const { register, handleSubmit,formState: { errors }  } = useForm();
    const onSubmit = data =>{
       // Data.push(data)

        toast.success('the form was submitted successfully',{position: toast.POSITION.TOP_RIGHT,autoClose:3000})
        history.push("/home");

        let itemsArray = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : [];
        itemsArray.push(data);
        localStorage.setItem('userData', JSON.stringify(itemsArray));



        
    }
       
        return (
            <div className="outer">
                <div className="inner">
                    <form onSubmit={handleSubmit(onSubmit)} > 
                        <h3>Sign Up</h3>
                        <div className="form-group">
                            <label>First name</label>
                            {errors.FirstName &&  <span style={{color:"red" , padding:10}}>:first name is required</span>}
                            <input type="text" id="FN" {...register("FirstName",{ required: true})} className="form-control" placeholder="First name"/>
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            {errors.LastName &&  <span style={{color:"red" , padding:10}}>:last name is required</span>}
                            <input type="text" id="LN" {...register("LastName",{ required: true})} className="form-control" placeholder="Last name"  />
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            {errors.Age &&  <span style={{color:"red" , padding:10}}>{errors.Age.message}</span>}
                            <input type="number" id="AG" {...register("Age",{ required: ":Age required",valueAsNumber:true })} className="form-control" min="18" max="100" placeholder="Enter age"  />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            {errors.Email &&  <span style={{color:"red" , padding:10}}>:email is required</span>}
                            <input type="email" id="ML" {...register("Email",{ required: true ,pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,6}$/})} className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            {errors.password &&  <span style={{color:"red" , padding:10}}>{errors.password.message}</span>}
                            <input type="password"  id="PS" {...register("password",{ required: ':password is required',minLength:{value:3,message:":password must be more than 2"}, maxLength:{value:6,message:":password must be less than 6"}  })} className="form-control" placeholder="Enter password" />
                        </div>
                    
                        
                        <input type="submit" className="btn btn-colers btn-lg" style={{color:'white'}} value="Register"  ></input>
                        
                        <p className="forgot-password text-right">
                            Already registered <Link to="/sign-in">log in?</Link>
                        </p>
                    </form>
                </div>
            </div>   
        );
    }
    export default SignUp