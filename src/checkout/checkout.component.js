import React from "react";
import CheckoutItem from "../components/checkout-Item/checkout-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartItemTotal } from "../redux/cart/cart.selector";
import './check.style.scss'

const CheckoutPage =({cartItems,total})=>{
   return(
    <div className="checkout-page">
       <div className="checkout-header">
          <div className="header-block">
             <span>Product</span>
          </div>
          <div className="header-block">
             <span>Discription</span>
          </div>
          <div className="header-block">
            <span>Quantity</span> 
          </div>
          <div className="header-block">
             <span>Price</span>
          </div>
          <div className="header-block">
             <span>Remove</span>
          </div>
       </div>
       {
          cartItems.map(cartItem => 
          <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
          )
       }
       <div className="total">
          <span>TOTAL : ${total} </span>
       </div>

    </div>
   )
}

const mapStateToProps = createStructuredSelector({
   cartItems : selectCartItems,
   total : selectCartItemTotal
})

export default connect(mapStateToProps)(CheckoutPage);