
import React from 'react';
import './Card.css';
import burger from './assets/burger.jpeg'
// import fries from '.assets/fries.jpeg'
// import coke from '.assets/coke.jpeg'
// import Pepsi from '.assets/pepsi.jpeg'
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
const BtnFirst = {
    color:"#ffffff",
    backgroundColor:"#3f51b5",
    marginTop:"15px",
    marginLeft:"15px",
}
const BtnSecond ={
    color:"#ffffff",
    backgroundColor:"#e91e63",
    marginTop:"15px",
    marginLeft:"15px",
}

function Cards (props){
    return(<>
   <div className="row">
     <div className="column">
        <div className="card">
                <div className="container">
                <img className="card-img" src={burger} alt="imag"/>
                    <h2 className="foodname">{props.name}</h2>
                    <p className="foodprice">price:{props.price}</p>
		            <p className="fooditems">Total:{props.total}</p>
                    <p className="total">Cost(INR):{props.cost}</p>
            </div>
            <Button style={BtnFirst} startIcon={<AddIcon/>}></Button>
            <Button style={BtnSecond} startIcon={<RemoveIcon/>}></Button>
        </div>
    </div>
</div>
   </>);
} 
export default Cards;