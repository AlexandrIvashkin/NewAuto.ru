import React from 'react';
import ReactDOM from 'react-dom';
import {homeJSON} from './homeJSON';

import './style/home.css';

class Home extends React.Component{
  
  contentImg(index){
    return(
    <div>
      <h1>{index.name}</h1>
      <p>{index.text}</p>
    </div>
    )
  }

  imgCars(index){
    return(
      <div><img src={index.imgLogo} /></div>
    )
  }

  contentIndex(){
    let descriptionCars = homeJSON.textHome.map((index)=> <div>{this.contentImg(index)}</div>);
    return(
      <div>
        {descriptionCars}
      </div>)
  }
  
  topImg(){
    let topImgCars = homeJSON.textHome.map((index)=> <div>{this.imgCars(index)}</div>);
    return(
      <div className="imgCar">
        {topImgCars}
      </div>)
  }

  render(){
    return(
      <div>
        <div>
          {this.topImg()}
        </div>
        <div className="contentBlock">
          <div className="contentText">
            {this.contentIndex()}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;