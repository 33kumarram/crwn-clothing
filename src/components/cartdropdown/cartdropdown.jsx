import React from 'react';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import {toggleCartHidden} from '../../redux/cart/action'
import CartItemd from '../cartitem/cartitem.component';
import CustomButton from '../custom button/custombutton';
import './cartdropdown.style.scss';


const CartDropdown=({ cartItems, dispatch}) =>{
    const navigate =useNavigate();
    
    return(

        <div className='cart-dropdown' >
            <div className="cart-items">
                {
                cartItems.length 
                ?
                cartItems.map (cartItem=> <CartItemd key={cartItem.id} item={cartItem}/>)
                :
                <span className="empty-message"> Your cart is empty </span>
                }

            </div>
                <CustomButton onClick={
                    ()=>{navigate('/checkout');
                    dispatch(toggleCartHidden())
                    }} >
                    GO TO CHECKOUT
                    </CustomButton>
        </div>
    
)}
const mapStateToProps =(state) =>({
    cartItems : selectCartItems(state)
})
// const mapStateToProps =({cart :{cartItems}}) =>({
//     cartItems
// })
export default connect(mapStateToProps)(CartDropdown);
