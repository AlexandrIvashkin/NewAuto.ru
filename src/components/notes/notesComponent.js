import React from 'react';
import ReactDOM from 'react-dom';
import notesDescr from './notesJSON';

class NotesComponent extends React.Component {
  getNotesContent(index, notesId){
  	if(index.id != notesId) return;
  	return(
  	  <div className= "notes-div">
  		<h1>{index.caption}</h1>
  		<div>{index.text}</div>
  	  </div>
  	)
  }
  render(){
  	const notesId = this.props.match.params.id;
  	var notesContent = notesDescr.map((index) => <div key={index.id}>{this.getNotesContent(index, notesId)}</div>);
  	return(
  	  <div>{notesContent}</div>
  	)
  }
}

export default NotesComponent;