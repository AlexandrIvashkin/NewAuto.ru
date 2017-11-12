function carsDescription(idCars){
  let allCarsDescription= [
      	{
	      name: "BMW 640i Кабриолет",
	      id: "BMW1",
	      bodyType: "кабриолет (2 дв.)",
	      amount: "2979 см3",
	      power: "320 л.с.",
	      dateRelease: "03.2015",
	      country: "Germany",
	      acceleration: "за 5.7",
	      maxSpeed: "250 км/ч",
	      price: "4 840 000 ₽"
    	},
    	{
      	name: "BMW 6 серии GT",
      	id: "BMW2",
      	bodyType: "5 дв. хэтчбэк",
      	amount: "1998 см3",
      	power: "300 л.с.",
      	dateRelease: "2017",
      	country: "Germany",
      	acceleration: "за 6.3 ",
     	  maxSpeed: "250 км/ч",
      	price: "3 560 000 ₽"
    	},
    	{
      	name: "BMW 640d xDrive",
      	id: "BMW3",
      	bodyType: "2 дв купе",
      	amount: "2135 см3",
      	power: "313 л.с.",
      	dateRelease: "2015",
      	country: "Germany",
      	acceleration: "за 5.1 ",
     	  maxSpeed: "250 км/ч",
      	price: "3 950 000 ₽"
    	},
    	{
      	name: "BMW 520i",
      	id: "BMW4",
      	bodyType: "5 дв. универсал",
      	amount: "1790 см3",
      	power: "184 л.с.",
      	dateRelease: "2016",
      	country: "Germany",
      	acceleration: "за 8.3 ",
     	  maxSpeed: "226 км/ч",
      	price: "2 540 000 ₽"
    	},
    	{
      	name: "BMW 420i Купе",
      	id: "BMW5",
      	bodyType: "2 дв. купе",
      	amount: "1998 см3",
      	power: "184 л.с.",
      	dateRelease: "2013",
      	country: "Germany",
      	acceleration: "за 7.5 ",
     	  maxSpeed: "263 км/ч",
      	price: "2 490 000 ₽"
    	},
    	{
      	name: "Nissan Murano",
      	id: "Nissan1",
      	bodyType: "5 дв. Кроссовер",
      	amount: "2350 см3",
      	power: "249 л.с.",
      	dateRelease: "2017",
      	country: "Japan",
      	acceleration: "за 8.2 ",
     	  maxSpeed: "210 км/ч",
      	price: "2 580 000 ₽"
    	},
    	{
      	name: "Nissan Terrano",
      	id: "Nissan2",
      	bodyType: "5 дв. Кроссовер",
      	amount: "1998 см3",
      	power: "105 л.с.",
      	dateRelease: "2014",
      	country: "Japan",
      	acceleration: "за 10.9 ",
     	  maxSpeed: "174 км/ч",
      	price: "814 000 ₽"
    	},
    	{
      	name: "Nissan Patrol",
      	id: "Nissan3",
      	bodyType: "5 дв. Кроссовер",
      	amount: "2350 см3",
      	power: "405 л.с.",
      	dateRelease: "2014",
      	country: "Japan",
      	acceleration: "за 6.6 ",
     	  maxSpeed: "210 км/ч",
      	price: "4 550 000 ₽"
    	},
    	{
      	name: "Nissan Kicks",
      	id: "Nissan4",
      	bodyType: "5 дв. Кроссовер",
      	amount: "1750 см3",
      	power: "114 л.с.",
      	dateRelease: "2017",
      	country: "Japan",
      	acceleration: "за 11.5 ",
     	  maxSpeed: "170  км/ч",
      	price: "950 000 ₽"
    	},
    	{
      	name: "Nissan X-Trail",
      	id: "Nissan5",
      	bodyType: "5 дв. Кроссовер",
      	amount: "1890 см3",
      	power: "130 л.с.",
      	dateRelease: "2015",
      	country: "Japan",
      	acceleration: "за 10.5 ",
     	  maxSpeed: "170  км/ч",
      	price: "1 790 000 ₽"
    	},
    	{
      	name: "Gallardo LP 550-2",
      	id: "Lambo1",
      	bodyType: "купе",
      	amount: "5024 см3",
      	power: "550 л.с.",
      	dateRelease: "2013",
      	country: "Italy",
      	acceleration: "за 3.9 ",
     	  maxSpeed: "320  км/ч",
      	price: "$ 225 795 "
    	},
    	{
      	name: "Gallardo LP 570-4",
      	id: "Lambo2",
      	bodyType: "купе",
      	amount: "4890 см3",
      	power: "570 л.с.",
      	dateRelease: "2014",
      	country: "Italy",
      	acceleration: "за 3.4 ",
     	  maxSpeed: "320  км/ч",
      	price: "$ 215 000 "
    	},
    	{
      	name: "Aventador LP 700-4",
      	id: "Lambo3",
      	bodyType: "купе",
      	amount: "6498 см3",
      	power: "700 л.с.",
      	dateRelease: "2011",
      	country: "Italy",
      	acceleration: "за 2.9 ",
     	  maxSpeed: "354  км/ч",
      	price: "$ 310 000 "
    	},
    	{
      	name: "Veneno",
      	id: "Lambo4",
      	bodyType: "купе",
      	amount: "6498 см3",
      	power: "517 л.с.",
        dateRelease: "2013",
      	country: "Italy",
      	acceleration: "за 4.9 ",
     	  maxSpeed: "310  км/ч",
      	price: "$ 280 000 "
    	},
    	{
      	name: "Gallardo",
      	id: "Lambo5",
      	bodyType: "купе",
      	amount: "5204 см3",
      	power: "560 л.с.",
      	dateRelease: "2013",
      	country: "Italy",
      	acceleration: "за 4.2 ",
     	  maxSpeed: "310  км/ч",
      	price: "$ 235 000 "
    	},
    	{
      	  name: "Mercedes-AMG C 43 4MATIC",
      	  id: "mers1",
      	  bodyType: "купе",
      	  amount: "2996 см3",
      	  power: "360 л.с.",
      	  dateRelease: "2013",
      	  country: "Germany",
      	  acceleration: "за 4.7 ",
     	  maxSpeed: "250  км/ч",
      	  price: "3 220 000 ₽"
    	},
    	{
      	  name: "Mercedes-AMG S 65",
      	  id: "mers2",
      	  bodyType: "седан",
      	  amount: "3556 см3",
      	  power: "630 л.с.",
      	  dateRelease: "2013",
      	  country: "Germany",
      	  acceleration: "за 4.3 ",
     	  maxSpeed: "250  км/ч",
      	  price: "17 100 000 ₽"
    	},
    	{
      	  name: "Mercedes-AMG A 45 4MATIC",
      	  id: "mers3",
      	  bodyType: "купе",
      	  amount: "3150 см3",
      	  power: "440 л.с.",
      	  dateRelease: "2013",
      	  country: "Germany",
      	  acceleration: "за 4.8 ",
     	  maxSpeed: "250  км/ч",
      	  price: "2 460 000 ₽"
    	},
    	{
      	  name: "Mercedes-AMG C 63",
      	  id: "mers4",
      	  bodyType: "седан",
      	  amount: "3982 см3",
      	  power: "410 л.с.",
      	  dateRelease: "2013",
      	  country: "Germany",
      	  acceleration: "за 4.8 ",
     	  maxSpeed: "250  км/ч",
      	  price: "4 620 000 ₽"
    	},
    	{
      	  name: "Mercedes-AMG GT",
      	  id: "mers5",
      	  bodyType: "купе",
      	  amount: "4150 см3",
      	  power: "410 л.с.",
      	  dateRelease: "2016",
      	  country: "Germany",
      	  acceleration: "за 4.3 ",
     	  maxSpeed: "250  км/ч",
      	  price: "8 030 000 ₽"
    	}
  	];

  for (var i= 0; i < allCarsDescription.length; i++) {
      let carInfo= allCarsDescription[i];
      if (carInfo.id == idCars) return carInfo;
    }
}

export default carsDescription;