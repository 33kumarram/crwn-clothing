import './App.css';
import React from 'react';
import {BrowserRouter,Routes , Route} from 'react-router-dom';
import HomePage from './homepage';
import ShopPage from './shop/shop.component';
import Header from './components/header/headercomponent';
import SignInAndSignUpPage from './components/signin and signup/signin and signup';
import { auth, createUserProfileDocument } from  './firebase/firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
class App extends React.Component {
  
unsubsubscribeFromAuth= null; 
   
  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{
      if (userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapShot=>{
         
           setCurrentUser({
             id:snapShot.id,
             ...snapShot.data()
           });
      });
    }
    setCurrentUser(userAuth);
    
  });
}
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    
    <BrowserRouter>
    <Header  />
      <Routes>
      <Route path='/crwn-clothing/' element={<HomePage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
      <Route path='/signin' element ={<SignInAndSignUpPage/>}/>
      {/* <Route exact path='/signin' render ={()=>this.props.currentUser ? (<Navigate to ='/crwn-clothing' />) : (<SignInAndSignUpPage/>) }/> */}

      </Routes>
      </BrowserRouter>

  );
  }
}
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user=> dispatch(setCurrentUser(user))
});
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
