import React, { Component } from 'react';
import { LOGIN_PAGE_ID,REGISTER_PAGE_ID } from './constants';

export default class LoginView extends Component{
 constructor(props){
 super(props);
   this.state={
   firstName:"",
   lastName:"",
   email:"",
   username:"",
   password:"",
   message : "",
   user : []
   }
 this.onUsernameChange = this.onUsernameChange.bind(this);
 this.onPasswordChange = this.onPasswordChange.bind(this);
 this.onFirstNameChange = this.onFirstNameChange.bind(this);
 this.onLastNameChange = this.onLastNameChange.bind(this);
 this.onEmailChange = this.onEmailChange.bind(this);
 }

 onFirstNameChange(event){
 this.setState({
 firstName:event.target.value,
  })
 }

 onLastNameChange(event){
 this.setState({
 lastName:event.target.value,
  })
 }

 onEmailChange(event){
 this.setState({
 email:event.target.value,
  })
 }

 onUsernameChange(event){
 this.setState({
 username:event.target.value,
  })
 }

 onPasswordChange(event){
 this.setState({
 password:event.target.value,
  })
 }

 onSubmitClick(event){
 const { username,password,firstName,lastName,email,message,user } = this.state;
 event.preventDefault();
 if(username ==="" || email ==="" || password ===""){
 let page = this.props.page
 this.setState({ message : "Username, Email and Password is required!",})
 this.props.onPageChange(page);
 }

 else{
 const userDatum =
   { username: username,
   password : password,
   firstName: firstName,
   lastName : lastName,
   email : email
   }

 user.push(userDatum);
 localStorage.setItem("UserData",JSON.stringify(user));
 alert("Registered Successfully");
 this.props.onPageChange(LOGIN_PAGE_ID);
  }
 }

 render(){
 const { username,password,firstName,lastName,email,message } = this.state;
 return(
   <div>
   <fieldset>
  <legend>Register</legend>
   <span style={{color:'red'}}>{message}</span>
   <br />
 <input type="text" placeholder="First Name" value={firstName} onChange={ (event)=>{this.onFirstNameChange(event)}} />

   <br />
   <br />

 <input type="text" placeholder="Last Name" value={lastName} onChange={ (event)=>{this.onLastNameChange(event)}} />

 <br />
 <br />

 <input type="email" placeholder="Email" value={email} onChange={ (event)=>{this.onEmailChange(event)}} />

 <br />
 <br />

 <input type="text" placeholder="Username" value={username} onChange={ (event)=>{this.onUsernameChange(event)}} />

 <br />
 <br />

 <input type="password" placeholder="Password" value={password} onChange={ (event)=>{this.onPasswordChange(event)}} />

 <br />
 <br />

 <button onClick={(event)=>{this.onSubmitClick(event)}}>Register</button>

 <br />
 <br />
 </fieldset>
 </div>
 );
 }
}
