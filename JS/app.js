'use strict';

const parentElement = document.getElementById('salmonCookies');
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let workingHour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let seattleSales = {
  locationName: 'seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  CustPerHour:[],
  cookiesPerHour:[],
  avgCookiePurshPerCust:6.3,
  totalDailyCookies: 0,
  getAmountOfCookies: function(){
    for(let i = 0; i < workingHour.length; i++) {
      let cookiePrHr  = Math.ceil(getRandomIntInclusive(this.minCustPerHour, this.maxCustPerHour) * this.avgCookiePurshPerCust);
      this.cookiesPerHour.push(cookiePrHr);
    }
  },
  render: function(){
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    let h2element = document.createElement('h2');
    h2element.textContent = this.locationName;
    articleElement.appendChild(h2element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for(let i=0; i<this.cookiesPerHour.length; i++) {
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${workingHour[i]}: ${this.cookiesPerHour[i]}`;
    }
  }
};

let tokyoSales = {
  locationName: 'Tokyo',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  CustPerHour:[],
  cookiesPerHour:[],
  avgCookiePurshPerCust:1.2,
  totalDailyCookies: 0,
  getAmountOfCookies: function(){
    for(let i = 0; i < workingHour.length; i++) {
      let cookiePrHr  = Math.ceil(getRandomIntInclusive(this.minCustPerHour, this.maxCustPerHour) * this.avgCookiePurshPerCust);
      this.cookiesPerHour.push(cookiePrHr);
    }
  },
  render: function(){
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    let h2element = document.createElement('h2');
    h2element.textContent = this.locationName;
    articleElement.appendChild(h2element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for(let i=0; i<this.cookiesPerHour.length; i++) {
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${workingHour[i]}: ${this.cookiesPerHour[i]}`;
    }
  }
};

let DubaiSales  = {
  locationName: 'Dubai',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  CustPerHour:[],
  cookiesPerHour:[],
  avgCookiePurshPerCust:3.7,
  totalDailyCookies: 0,
  getAmountOfCookies: function(){
    for(let i = 0; i < workingHour.length; i++) {
      let cookiePrHr  = Math.ceil(getRandomIntInclusive(this.minCustPerHour, this.maxCustPerHour) * this.avgCookiePurshPerCust);
      this.cookiesPerHour.push(cookiePrHr);
    }
  },
  render: function(){
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    let h2element = document.createElement('h2');
    h2element.textContent = this.locationName;
    articleElement.appendChild(h2element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for(let i=0; i<this.cookiesPerHour.length; i++) {
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${workingHour[i]}: ${this.cookiesPerHour[i]}`;
    }
  }
};

let ParisSales = {
  locationName: 'Paris',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  CustPerHour:[],
  cookiesPerHour:[],
  avgCookiePurshPerCust:2.3,
  totalDailyCookies: 0,
  getAmountOfCookies: function(){
    for(let i = 0; i < workingHour.length; i++) {
      let cookiePrHr  = Math.ceil(getRandomIntInclusive(this.minCustPerHour, this.maxCustPerHour) * this.avgCookiePurshPerCust);
      this.cookiesPerHour.push(cookiePrHr);
    }
  },
  render: function(){
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    let h2element = document.createElement('h2');
    h2element.textContent = this.locationName;
    articleElement.appendChild(h2element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for(let i=0; i<this.cookiesPerHour.length; i++) {
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${workingHour[i]}: ${this.cookiesPerHour[i]}`;
    }
  }
};

let LimaSales = {
  locationName: 'Lima',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  CustPerHour:[],
  cookiesPerHour:[],
  avgCookiePurshPerCust:4.6,
  totalDailyCookies: 0,
  getAmountOfCookies: function(){
    for(let i = 0; i < workingHour.length; i++) {
      let cookiePrHr  = Math.ceil(getRandomIntInclusive(this.minCustPerHour, this.maxCustPerHour) * this.avgCookiePurshPerCust);
      this.cookiesPerHour.push(cookiePrHr);
    }
  },
  render: function(){
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    let h2element = document.createElement('h2');
    h2element.textContent = this.locationName;
    articleElement.appendChild(h2element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for(let i=0; i<this.cookiesPerHour.length; i++) {
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${workingHour[i]}: ${this.cookiesPerHour[i]}`;
    }
  }
};

seattleSales.render();
seattleSales.getAmountOfCookies();
tokyoSales.render();
tokyoSales.getAmountOfCookies();
DubaiSales.render();
DubaiSales.getAmountOfCookies();
ParisSales.render();
ParisSales.getAmountOfCookies();
LimaSales.render();
LimaSales.getAmountOfCookies();





