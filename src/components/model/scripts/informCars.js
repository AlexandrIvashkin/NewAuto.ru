import React from 'react';
import ReactDOM from 'react-dom';

import '../style/informCars.css';

const InformCars = (carUuid) => {
  	return(
  	  <div className="informCars">
  	 	<table>
  	 	  <tbody>
  	 	  	<tr>
  	 	  	  <td>Марка: </td>
  	 	  	  <td>{carUuid.name}</td>
  	 	  	</tr>
  	 	  	<tr>
  	 	  	  <td>Кузов: </td>
  	 	  	  <td>{carUuid.bodyType}</td>
  	 	  	</tr>
  	 	  	<tr>
  	 	  	  <td>Объем: </td>
  	 	  	  <td>{carUuid.amount}</td>
  	 	  	</tr>
  	 	  	<tr>
  	 	  	  <td>Мощность: </td>
  	 	  	  <td>{carUuid.power}</td>
  	 	  	</tr>
  	 	  	<tr>
  	 	  	  <td>Страна изготовитель: </td>
  	 	  	  <td>{carUuid.country}</td>
  	 	  	</tr>
  	 	  	<tr>
  	 	  	  <td>Дата выпуска: </td>
  	 	  	  <td>{carUuid.dateRelease}</td>
  	 	  	</tr>
  	 	  	<tr>
  	 	  	  <td>Разкон до 100 км/ч: </td>
  	 	  	  <td>{carUuid.acceleration}</td>
  	 	  	</tr>
  	 	  	<tr>
  	 	  	  <td>Цена: </td>
  	 	  	  <td>{carUuid.price}</td>
  	 	  	</tr>
  	 	  </tbody>
  	 	</table>
	  </div>
  	);
  }

export default InformCars;