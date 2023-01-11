import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom button/custombutton";
import { userServices } from "../../services/user.service";
import {auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './signup.style.scss'

class SignUp extends React.Component {
    constructor (){
        super();
        this.state={
            displayName : '',
            email : '',
            mobile_no:null,
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
    
        const {mobile_no, displayName, email, password, confirmPassword } = this.state;
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }

        await userServices.CreateNewUser({mobile_no:mobile_no, displayName:displayName, email:email, password:password})
        .then(res=>{
          window.alert('New user created')
          window.location.reload()
          console.log(res)
        })
        .catch(err=>{
          window.alert(err)
          console.log(err)
        })
    
        // try {
        //   const { userAuth } = await auth.createUserWithEmailAndPassword(
        //     email,
        //     password
        //   );
    
        //   await createUserProfileDocument(userAuth, { displayName });
    
        //   this.setState({
        //     displayName: '',
        //     mobile_no:null,
        //     email: '',
        //     password: '',
        //     confirmPassword: ''
        //   });
        // } catch (error) {
        //   console.error(error);
        // }
      };
    handleChange = event =>{
        const { name, value} = event.target;
        this.setState({[name]:value});
    };

    render(){
        const {displayName,mobile_no, email, password, confirmPassword}= this.state;
        return(
            <div className="sign-up" >
                <h2 className="title">I don't have account</h2>
                <span>Sign up with email and password</span>
                <form className="sign-up" onSubmit={this.handleSubmit}>
                <FormInput 
                type='number'
                name = 'mobile_no'
                value={mobile_no}
                label=''
                onChange = {this.handleChange}
                required/>
                <FormInput 
                type='text'
                name = 'displayName'
                value={displayName}
                label='Name'
                onChange = {this.handleChange}
                required/>
                <FormInput 
                type='email'
                name = 'email'
                value={email}
                label='Email'
                onChange = {this.handleChange}
                required/>
                <FormInput 
                type='password'
                name = 'password'
                value={password}
                onChange = {this.handleChange}
                label='Passward'
                required/>
                <FormInput 
                type='password'
                name = 'confirmPassword'
                value={confirmPassword}
                onChange = {this.handleChange}
                label = 'Confirm password'
                required/>
                <CustomButton type='submit'  >SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;