import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom button/custombutton';
import { signInWithGoogle } from '../../firebase/firebase.utils'
import './signin.style.scss'

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password : ''
        }
    }
   handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
    } 
    handleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]: value})
    }

render(){
    return(
       <div className="sign-in">
           <h1>I already have an account</h1>
           <span>Sign in with your email and password</span>
           <form>
               <FormInput type='email' name='email'label='Email' handleChange={this.handleChange} value={this.state.email} required />
               
               <FormInput type='password' label='Password'handleChange={this.handleChange} name='password' value={this.state.password} required />

               <div className="buttons">
               <CustomButton type='submit' >sign in</CustomButton>
               <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                   {' '}
                   sign in with google {' '}
                   </CustomButton>
               </div>               
           </form>
       </div> 
    )
}
}
export default SignIn;