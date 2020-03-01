import React, { Component } from 'react';
import { REGISTER_PAGE_ID,LIST_PAGE_ID } from './constants';

export default class DetailView extends Component{
 constructor(props){
 super(props);
   let id = props.id;
   let treeArr = JSON.parse(localStorage.getItem("Tree_Arr"));
   let treeObj;
   for (treeObj of treeArr){
   if(treeObj.id === id){
   break;
  }
 }

 this.state = {
   treeArr : treeArr,
   id : id,
   name : treeObj.name,
   scientificName : treeObj.scientificName,
   treeImageUrl : treeObj.treeImageUrl,
   seedImageUrl : treeObj.seedImageUrl,
   shortDescription : treeObj.shortDescription,
 }
 this.onBackClick= this.onBackClick.bind(this);
}

onBackClick(event){
 event.preventDefault();
 this.props.onPageChange(LIST_PAGE_ID)
}

render(){
 return(
   <div>
   <center>
   <h1>{this.state.name}</h1>
   <p>Scientific name: <b>{this.state.scientificName}</b></p>
   <img src={this.state.treeImageUrl} alt={this.state.name} height="20%" width="20%" />
   <figcaption>{this.state.name}{"(Tree Image)"}</figcaption>

   <br />

   <img src={this.state.seedImageUrl} alt={this.state.name} height="20%" width="20%" />
   <figcaption>{this.state.name}{"(Seed Image)"}</figcaption>

   <br />
   </center>

   <br/>
   <p>Description: <br />{this.state.shortDescription}</p>
   <button onClick={(event)=>this.onBackClick(event)}>Back</button>
   </div>
 );
 }
}
