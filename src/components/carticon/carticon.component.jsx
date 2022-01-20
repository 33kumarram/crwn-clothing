import React from "react";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import {toggleCartHidden}  from "../../redux/cart/action";
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { createStructuredSelector } from "reselect";
import './carticon.style.scss'
const CartIcon = ({toggleCartHidden, itemCount}) =>{
   return( 
   <div className="cart-icon" onClick= {toggleCartHidden} >
         <ShoppingIcon className="shopping-icon" />,
        <span className="item-count"> {itemCount}</span>
    </div>
   )
}
const mapDispatchToProps = dispatch =>({
   toggleCartHidden :()=>dispatch(toggleCartHidden())
})
const mapStateToPros = createStructuredSelector({
    itemCount: selectCartItemsCount
})
// const mapStateToPros = ({cart :{cartItems}}) =>({
//    itemCount : cartItems.reduce((accumulatedquantity, cartItem)=> accumulatedquantity + cartItem.quantity , 0)
// })

export default connect(mapStateToPros, mapDispatchToProps)(CartIcon);