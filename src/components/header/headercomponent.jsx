import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../carticon/carticon.component";
import CartDropdown from "../cartdropdown/cartdropdown";
import './headercomponent.style.scss'

const Header=({currentUser, hidden})=>(
    <div className="header">
        <Link to='/' className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link   className="option" to='/shop'>
                SHOP
            </Link>
            <Link   className="option" to='/signin'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className="option" onClick={()=>auth.signOut()} >SIGN OUT</div>
                :
                <Link className="option" to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null :
        <CartDropdown/>
        }

    </div>
)
    const mapStateToProps= ({user:{currentUser}, cart : {hidden}} ) =>({
    currentUser,
    hidden
});
export default connect(mapStateToProps)(Header); 