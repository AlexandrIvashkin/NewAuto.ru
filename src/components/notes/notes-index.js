import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import notesDescr from './notesJSON';
import './notesCSS.css';
import NotesComponent from './notesComponent';

class Notes extends React.Component{

  getNotesArticle(notesDescr){
  	return(
  	  <div className= "notes-index">
  	    <Link to={`/notes/${notesDescr.id}`}>{notesDescr.caption}</Link>
  	  </div>
  	)
  }
  render(){
	var article= notesDescr.map((index) => <div key={index.id}>{this.getNotesArticle(index)}</div>);
  	return(
      <Router>
          <div>
            {article}
            <Route exact path="/notes/:id" component ={NotesComponent} />
          </div>
      </Router>
  	);
  }
}

export default Notes;