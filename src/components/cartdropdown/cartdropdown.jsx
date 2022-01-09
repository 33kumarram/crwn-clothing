import React from 'react';
import { connect } from 'react-redux';
import cartItemd from '../cartitem/cartitem.component';
import CustomButton from '../custom button/custombutton';
import './cartdropdown.style.scss';

const CartDropdown=({ cartItems }) =>(

        <div className='cart-dropdown' >
            <div className="cart-items">
                {
                cartItems.map (cartItem=> <cartItemd key={cartItem.id} item={cartItemd}/>)
                }
            </div>
                <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    
)
const mapStateToProps =({cart :{cartItems}}) =>({
    cartItems
})
export default connect(mapStateToProps)(CartDropdown);
