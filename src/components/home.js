import React, { Component } from "react";
import { Link } from "react-router-dom";
import Data from "./registration/data";

export default class Home extends Component{

    state={
        data:[],
        // _Data:Data 
    }
    getData=()=>{



        //https://fakestoreapi.com/products/  another api
        
        fetch('https://afternoon-falls-30227.herokuapp.com/api/v1/products/')
            .then(response => response.json())
            .then(apiData  => {
                this.setState({
                    data: apiData.data
                })
                // this.setState({
                //     data: this.state.data.slice(0,10)
                // })
            })
    }

    componentDidMount(){
        this.getData();
        // console.log(this.state._Data)
    }

  


    render(){

      if(this.state.data){
        return(
            
            <div className="cont">
                {this.state.data.map((item)=>{
                    return(
                        
                    <div className="card" style={{width: '18rem'}}>
                        <img src ={item.ProductPicUrl}  width= '100%' height="" className="" alt="1"></img>
                        <div className="card-body">
                            <h5 class="card-title">{item.Name}</h5>
                            <p class="card-text">{item.Description}</p>
                            <Link to={
                                {
                                    pathname:`/pruducts/ditals/${item.ProductId}`,
                                    Obj:item,
                                }
                            } className="btn btn-primary">Read more</Link>
                        </div>
                    </div>

                    )
                })}    
            </div>
        )
      } 

      else{
          return(
              <div className="cont">wait</div>
          )
      }
    }

}
