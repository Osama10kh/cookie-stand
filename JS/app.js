'use strict';


let workingHour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function Stores (locationName, minCustPerHour, maxCustPerHour, avgCookiePurshPerCust){
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePurshPerCust = avgCookiePurshPerCust;
  this.totalDailyCookies = 0;
  this.CustPerHour = [];
  this.cookiesPerHour = [];
  
  this.getAmountOfCookies();
};

Stores.prototype.getAmountOfCookies = function(){
  for(let i = 0; i < workingHour.length; i++) {
    let cookiePrHr  = Math.ceil(getRandomIntInclusive(this.minCustPerHour, this.maxCustPerHour) * this.avgCookiePurshPerCust);
    this.cookiesPerHour.push(cookiePrHr);
    this.totalDailyCookies += cookiePrHr;
};

Stores.prototype.render = function(){
  const parentElement = document.getElementById('salmonCookies');

  let tableEle = document.createElement('table');
  parentElement.appendChild(tableEle);

  let rowElement  = document.createElement('tr');
  rowElement.textContent = this.locationName;
  tableEle.appendChild(rowElement);

  let hourArray = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
  for (let x = 0; x<hourArray.length; x++){
    let thEle = document.createElement('th');
    rowElement.appendChild(thEle);
    thEle.textContent = hourArray[x];
  }
  const secRow = document.createElement('tr')
  table.appendChild(secRow);

  for(let i=0; i<this.cookiesPerHour.length; i++) {
    let tdElement = document.createElement('td');
    secRow.appendChild(tdElement);
    tdElement.textContent = `${workingHour[i]}: ${this.cookiesPerHour[i]}`;
  }
};

let seattleSales = new Stores('seattles', 23, 65, 6.3);

let TokyoSales = new Stores('Tokyo', 3, 24, 1.2);

let DubaiSales = new Stores('Dubai', 11, 38, 3.7);

let ParisSales = new Stores('Paris', 20, 38, 2.3);

let LimaSales = new Stores('Lima', 2, 16, 4.6);

seattleSales.render();
seattleSales.getAmountOfCookies();
TokyoSales.render();
TokyoSales.getAmountOfCookies();
DubaiSales.render();
DubaiSales.getAmountOfCookies();
ParisSales.render();
ParisSales.getAmountOfCookies();
LimaSales.render();
LimaSales.getAmountOfCookies();