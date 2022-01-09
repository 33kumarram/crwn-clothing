
import React from 'react';
import './cartitem.style.scss'

const cartItemd = ({item :{imageUrl, name, price,quantity}}) =>{
    
    <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
                {quantity}*${price}
            </span>
        </div>
    </div>

}
export default cartItemd;