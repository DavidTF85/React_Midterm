import React, { Component } from 'react';
import { REGISTER_PAGE_ID,LIST_PAGE_ID } from './constants';

export default class LoginView extends Component{
 constructor(props){
 super(props);
   this.state={
   error:"",
   username:"",
   password:"",
   loggedInUserObj:null,
 }

 this.onUsernameChange = this.onUsernameChange.bind(this);
 this.onPasswordChange = this.onPasswordChange.bind(this);
 this.onLoginClick = this.onLoginClick.bind(this);
 this.onRegisterClick = this.onRegisterClick.bind(this);
 }

 onUsernameChange(event){
 this.setState({
   error:"",
   })
   this.setState({
   username:event.target.value,
   })
 }

 onPasswordChange(event){
 this.setState({
   error:"",
   })
   this.setState({
   password:event.target.value,
   })
 }

 onLoginClick(event){
 event.preventDefault();
   const { username,password } = this.state;
   const user = JSON.parse(localStorage.getItem("UserData"));
   let userDatum = {}
   let isFound = false;
   for (userDatum of user) {

 console.log(userDatum)

 if(username === userDatum.username && password === userDatum.password){
   this.setState({
     loggedInUserObj : userDatum,
     })
     isFound = true;
    }
     break;
}

 if(isFound === true){
   alert("Logged in Successfully!")
   this.props.onPageChange(LIST_PAGE_ID);
   }

   else{
   this.setState({
   error:"Username or Password is incorrect!"
    })
  }
}

 onRegisterClick(event){
   event.preventDefault();
   this.props.onPageChange(REGISTER_PAGE_ID);
   }

 render(){
 const { username,password } = this.state;

 return(
   <div>
   <div className="validation-error">
   {this.state.error}
   </div>
 <fieldset>
 <legend>Login</legend>
 <input type="text" placeholder="Username" value={username} onChange={ (event)=>{this.onUsernameChange(event)}}/>
 <br />
 <br />

 <input type="password" placeholder="Password" value={password} onChange={ (event)=>{this.onPasswordChange(event)}} />

 <br />
 <br />

 <button onClick={(event)=>{this.onLoginClick(event)}}>Login</button>

 <br />
 <br />

 <p> New User?</p>
 <button onClick={this.onRegisterClick}>Click Here to Register</button>
  </fieldset>
  </div>
  );
 }
}
