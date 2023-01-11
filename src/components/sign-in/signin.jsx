import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom button/custombutton";
import { userServices } from "../../services/user.service";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "../../redux/user/user.action";
import { selectCurrentUser } from "../../redux/user/user.selector";
import "./signin.style.scss";
import { connect } from "react-redux";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile_no: null,
      // email:'',
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    // const {email, password} = this.state;
    // try{
    //     await auth.signInWithEmailAndPassword(
    //         email,
    //         password
    //         )
    //         this.setState({
    //             email:'', password:''
    //         })
    // } catch(error){
    //     console.log(error);
    // }

    const { mobile_no, password } = this.state;
    await userServices
      .signIn({ mobile_no: mobile_no, password: password })
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.user))
        this.props.setCurrentUser(res.user)
        window.alert("Successfully logged in");
        window.location.href='/crwn-clothing'
      })
      .catch((err) => {
        window.alert("Invalid mobile number or password");
        console.log(err);
      });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          {/* <FormInput
            type="email"
            name="email"
            label="Email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          /> */}
          <FormInput
            type="number"
            name="mobile_no"
            // label="Mobile Number"
            handleChange={this.handleChange}
            value={this.state.mobile_no}
            label=''
            required
          />
          <FormInput
            type="password"
            label="Password"
            handleChange={this.handleChange}
            name="password"
            value={this.state.password}
            required
          />

          <div className="buttons">
            <CustomButton onClick={this.handleSubmit} type="submit">sign in</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              {" "}
              sign in with google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user=> dispatch(setCurrentUser(user))
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
