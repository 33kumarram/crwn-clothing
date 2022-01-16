import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import CartItemd from '../cartitem/cartitem.component';
import CustomButton from '../custom button/custombutton';
import './cartdropdown.style.scss';

const CartDropdown=({ cartItems }) =>(

        <div className='cart-dropdown' >
            <div className="cart-items">
                {
                cartItems.map (cartItem=> <CartItemd key={cartItem.id} item={cartItem}/>)
                }
            </div>
                <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    
)
const mapStateToProps =(state) =>({
    cartItems : selectCartItems(state)
})
// const mapStateToProps =({cart :{cartItems}}) =>({
//     cartItems
// })
export default connect(mapStateToProps)(CartDropdown);
