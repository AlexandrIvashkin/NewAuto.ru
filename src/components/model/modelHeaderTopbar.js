import React from 'react';
import ReactDOM from 'react-dom';

import './style/modelHeaderTopbar.css';

import carsMarkslist from "./scripts/carsMarkslist";

class ImgSidebar extends React.Component{
  constructor(props){
  	super(props);

  	this.hendleClick = this.hendleClick.bind(this);
  };
  
  hendleClick(e){
  	this.props.chooseCarId(e.target.id);
  }

  getCarsMarksList(list){
  	var carMarksList = list.carsModel.map((index) => <li key={index.id}><a id= {index.id} onClick={this.hendleClick}>{index.name}</a></li>) // Слишком длинная
    return <ul>{carMarksList}</ul>;
  };
  
  getCarsMarksChar(array){

    return (
      <div className="model-header-img">
        <div className={array.class}>
          <h1>{array.id}</h1>
          <div className="list-Marks-Ul">
            {this.getCarsMarksList(array)}
          </div>
        </div>
      </div>)
  }

  getCarsMarks(){
  	var carsMarks = carsMarkslist.carsName.map((index) => 
  		<div key={index.id}>
  		  {this.getCarsMarksChar(index)}
  		</div>);
  	return (
  	  <div>
  	    {carsMarks}
  	  </div>)
  };
  render(){

  	return(
  	    <div>
  	    	{this.getCarsMarks()}
  	    </div>
  	);
  }
}

export default ImgSidebar;