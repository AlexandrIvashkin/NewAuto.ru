import React from 'react';
import ReactDOM from 'react-dom';

import ModelHeaderTopbar from './modelHeaderTopbar';
import carsDescription from './scripts/carsDescription';
import InformCars from './scripts/informCars';

class Model extends React.Component{
  constructor(props){
  	super(props);
  	this.state= {selectCarUuid: null};

  	this.setIdChooseCar= this.setIdChooseCar.bind(this);
  };
  
  returnInformById(carInform, descr){
  	if (carInform != null){
  	  let carUuid = carsDescription(carInform);
 	    return <div>{InformCars(carUuid)}</div>;
 	  }
  }

  setIdChooseCar(Uuid){
  	this.setState({selectCarUuid: Uuid});
  }

  render(){
  	var carInform = this.state.selectCarUuid; 

  	return(
  	  <div>
		    <ModelHeaderTopbar chooseCarId = {this.setIdChooseCar} />
		    {this.returnInformById(carInform, carsDescription)}
	    </div>
  	);
  }
}

export default Model;