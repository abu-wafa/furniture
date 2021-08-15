import { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



export default class MyCart extends Component{

state={
    
    items: localStorage.getItem('pruductData') ? JSON.parse(localStorage.getItem('pruductData')) : []

}

remove=(index)=>{
    console.log("before splice",this.state.items)
    this.state.items.splice(index, 1);
    console.log("after splice",this.state.items)
    this.setState({
        items:this.state.items,
    })
    localStorage.setItem('pruductData', JSON.stringify(this.state.items))

}

render(){
    return(

        <div className="cart-cont">
            <div id="shopping-cart">
                <h2>cart</h2>
                <div id="cart-list-items" class="list-items">
                    
                    <div class="pro-head"> 
                        Product
                    </div>

                    <div class="price-head">
                        Price
                    </div>

                    <div class="qty-head">
                        Quantity
                    </div>

                    <div class="total-head">
                        Total
                    </div>

                    <div class="remove-head">
                        Remove
                    </div>

                    {this.state.items.map((item,i)=>{
                        return(
                    <>
                     {/*<!-- start -->*/}
                        <div class="pro">
                        
                            <div class="img-container">
                                <img src={item.ProductPicUrl} alt="img"/>
                            </div>
                            <span>{item.Name}</span>
                                                        
                        </div>
    
                        <div class="price">
                           {item.Price}$
                        </div>
    
                        <div class="qty">
                            <input type="text"  minlength="0"/>
                        </div>
    
                        <div class="total">
                            $1999
                        </div>
    
                        <div class="remove" >
                        <FontAwesomeIcon icon={faTrash} onClick={()=>this.remove(i)}/>
                        </div>
                        {/*<!-- end -->*/}       
                    </>
                    )
                })}
              
                </div>
                <div><button id="btn-remove-all" onclick="removeAllItems()">Remove All</button></div>
                <div id="grand-total">
                    <h2>Cart Total</h2>
                    <div class="t">
                        <span>Total</span>
                        <span id="grandTotal">$19995</span>
                    </div>
                </div>
             </div>

        </div>
    )
}
}