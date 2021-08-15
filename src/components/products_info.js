import { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
export default class Pruduct extends Component{
    state={
        imgUrl:this.props.location.Obj.ProductPicUrl,
        NameObj: this.props.location.Obj.Name,  
        descObj:this.props.location.Obj.Description,
        catObj:this.props.location.Obj.Category,
        priceObj:this.props.location.Obj.Price,
        qnt_Value:1
    }

    cart=()=>{
        // call the userdata from the local storge and deal with it as an array
        let logData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : [];
        // if the local storge is empty redirect to logIn page
        if (logData=="") {
            // go to home signIn page
            this.props.history.push("/sign-in") 
            // notification 
            toast.warning('must have an account first ',{position: toast.POSITION.TOP_RIGHT,autoClose:3000})

        }
        else{  
        let btn=document.getElementById("add-to-cart")
        // call the pruductData from the local storge and deal with it as an array
        let dataArray = localStorage.getItem('pruductData') ? JSON.parse(localStorage.getItem('pruductData')) : [];
        //add the data object that have the info about the product in the local storge array
        dataArray.push(this.props.location.Obj);
        localStorage.setItem('pruductData', JSON.stringify(dataArray));
        // looping the productData local storge to check if the element is on it  
        for (let i = 0; i < dataArray.length; i++) {
            if (this.props.location.Obj.ProductId ==dataArray[i].ProductId){
                btn.value="it's in the cart"
                btn.style.backgroundColor="green"
                btn.style.cursor="not-allowed"
                btn.disabled = true;
            }
            
        }      
        }

    }  
    

    render(){
        
        return(
                <div className="wraper">
                        <div className="Product-img" >
                            <img src={this.state.imgUrl} width= '100%' height="" className="" alt="1"></img>
                        </div>   
                        <div class="product-content">
                            <h3>{this.state.NameObj}</h3>
                            <p>{this.state.descObj}</p>
                            <p class="cat"> Cat: {this.state.catObj}</p>                                                                  
                        </div>
                        <div class="Product-Availability">
                            <p class="Avability">{this.state.NameObj}: <span>Availabil </span></p>
                            <p class="Price">{this.state.priceObj}$</p>
                            <div class="qty">
                                <p>quantity</p>
                                <input type="number" min="1" value={this.state.qnt_Value} onChange={(e)=>{this.setState({qnt_Value:e.target.value})}} style={{outline:"none"}}/>
                            </div>
                            <input type="button" value="add to cart" id="add-to-cart"  class=" btn-blue-o" onClick={this.cart} />
                            <Link to="/cart"><button id="add-to-cart"  class=" btn-blue-o" >the Cart </button></Link>
                        </div> 
                        
                </div>
        )
    }
}